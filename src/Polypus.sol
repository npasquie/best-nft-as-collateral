// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./WadRayMath.sol";
import "./UserInteractionLogic/BorrowLogic.sol";
import "./Lens.sol";

/// @notice all entry points of the Polypus protocol
contract Polypus is Storage, Ownable, BorrowLogic, Lens {
    using OfferBookLib for OfferBook;
    using WadRayMath for Ray;
    using WadRayMath for uint256;

    /// ADMIN ///

    /// @notice makes an asset available on the market
    function createMarket(IERC721 asset) external onlyOwner {
        bookOf[asset].isActive = true;
    }

    /// PUBLIC ///

    /// @notice supplies to given market with given value to loan.
    /// @notice updates value to loan and adds the new liquidity.
    function supply(IERC721 asset, uint256 valueToLoan) external payable {
        OfferBook storage book = bookOf[asset];

        supplyChecks(asset, valueToLoan);

        uint256 alreadySupplied;
        uint256 prevOfferId = book.offerIdOf[msg.sender];

        if (prevOfferId != 0) {
            alreadySupplied = book.offer[prevOfferId].amount;
            if (msg.value + alreadySupplied < minimumDepositableValue) {
                revert valueOutOfRange();
            }
            book.remove(prevOfferId);
        } else if (msg.value < minimumDepositableValue) {
            revert valueOutOfRange();
        }

        book.offerIdOf[msg.sender] = book.insert(
            msg.value + alreadySupplied,
            valueToLoan,
            msg.sender
        );
    }

    /// @notice takes assets as collateral and gives
    /// @notice the maximum amount loanable to the caller
    function borrow(IERC721 asset, uint256[] calldata tokenIds)
        external
        returns (uint256)
    {
        OfferBook storage book = bookOf[asset];

        performPreChecks(book, asset, tokenIds);
        BorrowVars memory vars;
        vars.collateralToMatch = Ray({ray: tokenIds.length * RAY});
        do {
            vars = updateVars(book, vars);
            if (vars.cursorId == 0) {
                // reached the end
                revert notEnoughLiquidityAvailable();
            }
            if (vars.collateralToMatch.gte(vars.offerValueInAsset)) {
                book.remove(vars.cursorId);
                vars.collateralToMatch.ray -= vars.offerValueInAsset.ray;
                vars.borrowedAmount += vars.cursor.amount;
            } else {
                // entering this block ends the while loop
                vars = matchAndUpdateOffer(book, vars);
            }
        } while (vars.collateralToMatch.ray > 0);
        sendEth(vars.borrowedAmount);
        return vars.borrowedAmount;
    }

    /// @notice performs initial checks for the supply function
    function supplyChecks(IERC721 asset, uint256 valueToLoan) private {
        OfferBook storage book = bookOf[asset];

        if (valueToLoan < minimumValueToLoan) {
            revert valueOutOfRange();
        }
        if (!book.isActive) {
            revert unavailableMarket();
        }

        /// ETHEREUM ///
        // CETH.mint{value: msg.value}();

        /// POLYGON & ARBITRUM ///
        WETH.deposit{value: msg.value}();
        WETH.approve(address(AAVE_LENDING_POOL), msg.value);
        AAVE_LENDING_POOL.supply(
            address(WETH),
            msg.value,
            address(this),
            NO_REFERRAL_CODE
        );
    }
}
