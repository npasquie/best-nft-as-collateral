// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "../Storage/Storage.sol";
import "../WadRayMath.sol";
import "../OfferBookLib/OfferBookLib.sol";

struct BorrowVars {
    Offer cursor;
    uint256 cursorId;
    Ray collateralToMatch;
    Ray offerValueInAsset;
    uint256 borrowedAmount;
}

abstract contract BorrowLogic {
    using WadRayMath for uint256;
    using WadRayMath for Ray;
    using OfferBookLib for OfferBook;

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

    function updateVars(OfferBook storage book, BorrowVars memory vars)
        internal
        view
        returns (BorrowVars memory newVars)
    {
        newVars.cursorId = book.firstId;
        newVars.cursor = book.offer[vars.cursorId];
        newVars.offerValueInAsset = newVars.cursor.valueToLoan.divToRay(
            vars.cursor.amount
        );
    }
}
