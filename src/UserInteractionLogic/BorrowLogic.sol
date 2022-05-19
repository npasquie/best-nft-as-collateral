// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

import "../Storage/Storage.sol";
import "../WadRayMath.sol";
import "../OfferBookLib/OfferBookLib.sol";

/// @notice all variables needed for the borrow function logic
struct BorrowVars {
    Offer cursor;
    uint256 cursorId;
    Ray collateralToMatch;
    Ray offerValueInAsset;
    uint256 borrowedAmount;
}

/// @notice internal bits of logic for the borrow user interaction
abstract contract BorrowLogic is ERC721Holder {
    using WadRayMath for uint256;
    using WadRayMath for Ray;
    using OfferBookLib for OfferBook;

    /// @notice updates the book and the vars to partially match remaining
    /// @notice assets with the best offer
    function matchAndUpdateOffer(OfferBook storage book, BorrowVars memory vars)
        internal
        returns (BorrowVars memory finalVars)
    {
        uint256 amountTakenFromOffer = vars.offerValueInAsset.mulByWad(
            vars.cursor.amount
        );
        finalVars.borrowedAmount = vars.borrowedAmount + amountTakenFromOffer;
        finalVars.cursor.amount = vars.cursor.amount - amountTakenFromOffer;
        book.update(finalVars.cursor, vars.cursorId);
        finalVars.collateralToMatch.ray = 0;
    }

    /// @notice transfers the assets from the caller to the contract
    /// @dev caller must have approved the contract
    function takeAssets(IERC721 asset, uint256[] calldata tokenIds) internal {
        for (uint256 i; i < tokenIds.length; i++) {
            asset.transferFrom(msg.sender, address(this), tokenIds[i]);
        }
    }

    /// @notice checks that the market is active and takes the collateral
    function performPreChecks(
        OfferBook storage book,
        IERC721 asset,
        uint256[] calldata tokenIds
    ) internal {
        if (!book.isActive) {
            revert unavailableMarket();
        }

        takeAssets(asset, tokenIds);
    }

    /// @notice update borrowVars with the new best offer available
    function updateVars(OfferBook storage book, BorrowVars memory vars)
        internal
        view
        returns (BorrowVars memory)
    {
        Offer memory newCursor = book.offer[vars.cursorId];
        BorrowVars memory newVars = BorrowVars({
            cursor: newCursor,
            cursorId: book.firstId,
            collateralToMatch: vars.collateralToMatch,
            offerValueInAsset: newCursor.valueToLoan.divToRay(newCursor.amount),
            borrowedAmount: vars.borrowedAmount
        });
        return newVars;
    }
}
