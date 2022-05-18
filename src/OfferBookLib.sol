// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library OfferBookLib {
    /// @return newId the id of the newly created offer
    /// @dev amount and valueToLoan must have been checked before calling
    /// @dev amount and valueToLoan must both be above 0
    function insert(
        OfferBook storage book,
        uint256 amount,
        uint256 valueToLoan,
        address supplier
    ) internal returns (uint256 newId) {
        if (amount == 0 || valueToLoan == 0) {
            revert valueOutOfRange();
        }
        if (book.offerIdOf[supplier] != 0) {
            revert insertForExistentSupplier();
        }

        uint256 firstId = book.firstId;
        uint256 cursor = firstId;
        book.numberOfOffers++; // id 0 is reserved to null
        newId = book.numberOfOffers;
        book.offer[newId].amount = amount;
        book.offer[newId].valueToLoan = valueToLoan;
        uint256 prevId = cursor;

        while (book.offer[cursor].valueToLoan >= valueToLoan) {
            prevId = cursor;
            cursor = book.offer[cursor].nextId;
        }
        if (cursor == firstId) {
            insertAsFirst(book, newId, cursor);
        } else {
            insertBetween(book, newId, prevId, cursor);
        }

        book.offer[newId].supplier = supplier;
    }

    function remove(OfferBook storage book, uint256 offerId) internal {
        if (offerId > book.numberOfOffers) {
            revert removeNonExistentOffer();
        }
        if (book.offer[offerId].isRemoved) {
            revert alreadyRemoved();
        }

        book.offer[offerId].isRemoved = true;
        book.offerIdOf[book.offer[offerId].supplier] = 0;
        uint256 nextId = book.offer[offerId].nextId;
        uint256 prevId = book.offer[offerId].prevId;

        if (offerId == book.firstId) {
            book.firstId = nextId;
        }
        if (prevId != 0) {
            book.offer[prevId].nextId = nextId;
        }
        if (nextId != 0) {
            book.offer[nextId].prevId = prevId;
        }
    }

    function insertAsFirst(
        OfferBook storage book,
        uint256 newId,
        uint256 nextId
    ) private {
        book.firstId = newId;
        book.offer[newId].nextId = nextId;
        if (nextId != 0) {
            book.offer[nextId].prevId = newId;
        }
    }

    function insertBetween(
        OfferBook storage book,
        uint256 newId,
        uint256 prevId,
        uint256 nextId
    ) private {
        if (nextId != 0) {
            book.offer[nextId].prevId = newId;
        }
        book.offer[newId].nextId = nextId;
        book.offer[newId].prevId = prevId;
        book.offer[prevId].nextId = newId;
    }
}
