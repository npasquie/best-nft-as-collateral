// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./Storage/Storage.sol";
import "./OfferBookLib/OfferBookLib.sol";
import "./WadRayMath.sol";
import "./UserInteractionLogic/BorrowLogic.sol";

/// @notice all entry points of the Polypus protocol
contract Polypus is Storage, Ownable, BorrowLogic {
    using OfferBookLib for OfferBook;
    using WadRayMath for Ray;
    using WadRayMath for uint256;

    /// ADMIN ///

    function createMarket(IERC721 asset) external onlyOwner {
        bookOf[asset].isActive = true;
    }

    /// PUBLIC ///

    /// @notice supplies to given market with given value to loan.
    /// @notice updates value to loan and adds the new liquidity.
    function supply(IERC721 asset, uint256 valueToLoan) external payable {
        if (valueToLoan < minimumValueToLoan) {
            revert valueOutOfRange();
        }
        if (!bookOf[asset].isActive) {
            revert unavailableMarket();
        }

        uint256 alreadySupplied;
        uint256 prevOfferId = bookOf[asset].offerIdOf[msg.sender];

        if (prevOfferId != 0) {
            alreadySupplied = bookOf[asset].offer[prevOfferId].amount;
            if (msg.value + alreadySupplied < minimumDepositableValue) {
                revert valueOutOfRange();
            }
            bookOf[asset].remove(prevOfferId);
        } else if (msg.value < minimumDepositableValue) {
            revert valueOutOfRange();
        }

        bookOf[asset].offerIdOf[msg.sender] = bookOf[asset].insert(
            msg.value + alreadySupplied,
            valueToLoan,
            msg.sender
        );
    }

    function borrow(IERC721 asset, uint256[] calldata tokenIds)
        external
        returns (uint256)
    {
        OfferBook storage book = bookOf[asset];

        if (!book.isActive) {
            revert unavailableMarket();
        }

        BorrowVars memory vars;
        vars.collateralToMatch = Ray({ray: tokenIds.length * RAY});

        do {
            vars = updateVars(book, vars);
            if (vars.collateralToMatch.gte(vars.offerValueInAsset)) {
                book.remove(vars.cursorId);
                vars.collateralToMatch.ray -= vars.offerValueInAsset.ray;
                vars.borrowedAmount += vars.cursor.amount;
            } else {
                // entering this block ends the while loop
                vars = matchAndUpdateOffer(book, vars);
            }
        } while (vars.collateralToMatch.ray > 0);
        payable(msg.sender).transfer(vars.borrowedAmount);
        return vars.borrowedAmount;
    }
}
