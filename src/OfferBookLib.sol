// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library OfferBookLib {
    using OfferBookLib for OfferBook;

    /// @return offerId the id of the newly created offer
    /// @dev amount and valueToLoan must have been checked before calling
    /// @dev amount and valueToLoan must both be above 0
    function insert(
        OfferBook storage book,
        uint256 amount,
        uint256 valueToLoan
    ) external returns (uint256) {
        uint256 firstId = book.firstId;
        uint256 cursor = firstId;
        book.numberOfOffers++; // id 0 is reserved to null
        uint256 newId = book.numberOfOffers;
        book.offer[newId].amount = amount;
        book.offer[newId].valueToLoan = valueToLoan;
        uint256 prevId = cursor;

        while (book.offer[cursor].valueToLoan >= valueToLoan) {
            prevId = cursor;
            cursor = book.offer[cursor].nextId;
        }

        if (cursor == firstId) {
            book.insertAsFirst(newId, cursor);
        } else {
            book.insertBetween(newId, prevId, cursor);
        }

        return newId;
    }

    function remove(OfferBook storage book, uint256 offerId) external {
        require(offerId <= book.numberOfOffers);
        require(!book.offer[offerId].isRemoved);

        book.offer[offerId].isRemoved = true;

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
    ) internal {
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
    ) internal {
        if (nextId != 0) {
            book.offer[nextId].prevId = newId;
        }
        book.offer[newId].nextId = nextId;
        book.offer[newId].prevId = prevId;
        book.offer[prevId].nextId = newId;
    }
}
