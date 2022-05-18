// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./Storage.sol";
import "./OfferBookLib.sol";
import "./WadRayMath.sol";

/// @notice all entry points of the Polypus protocol
contract Polypus is Storage, Ownable {
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
        returns (uint256 borrowedAmount)
    {
        OfferBook storage book = bookOf[asset];

        if (!book.isActive) {
            revert unavailableMarket();
        }

        uint256 cursor = book.firstId;
        uint256 cursorAmount;
        uint256 cursorValueToLoan;
        address cursorSupplier;
        Ray memory collateralToMatch = Ray({ray: tokenIds.length * RAY});
        Ray memory offerValueInAsset;

        do {
            cursorAmount = book.offer[cursor].amount;
            cursorValueToLoan = book.offer[cursor].valueToLoan;
            offerValueInAsset = cursorValueToLoan.divToRay(cursorAmount);
            if (collateralToMatch.lt(offerValueInAsset)) {
                // loops stops after this block
                uint256 amountTakenFromOffer = offerValueInAsset.mulByWad(
                    cursorAmount
                );
                borrowedAmount += amountTakenFromOffer;
                cursorSupplier = book.offer[cursor].supplier;
                book.remove(cursor);
                book.insert(
                    cursorAmount - amountTakenFromOffer,
                    cursorValueToLoan,
                    cursorSupplier
                );
                collateralToMatch.ray = 0;
            } else {
                book.remove(cursor);
                collateralToMatch.ray -= offerValueInAsset.ray;
                borrowedAmount += cursorAmount;
            }
        } while (collateralToMatch.ray > 0);
        payable(msg.sender).transfer(borrowedAmount);
    }
}
