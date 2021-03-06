// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "../Storage/Types.sol";

// compiler doesn't allow visibility on free functions
/* solhint-disable func-visibility */

/// @notice places the offer in the book sorted from best to worst offer
function insertLogic(
    OfferBook storage book,
    uint256 amount,
    uint256 valueToLoan
) returns (uint256 newId) {
    uint256 firstId = book.firstId;
    uint256 cursor = firstId;
    newId = ++book.numberOfOffers; // id 0 is reserved to null
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
}

/// @notice inserts the id as the best offer in the book
function insertAsFirst(
    OfferBook storage book,
    uint256 newId,
    uint256 nextId
) {
    book.firstId = newId;
    book.offer[newId].nextId = nextId;
    if (nextId != 0) {
        book.offer[nextId].prevId = newId;
    }
}

/// @notice inserts `newId` between `prevId` and `nextId`
function insertBetween(
    OfferBook storage book,
    uint256 newId,
    uint256 prevId,
    uint256 nextId
) {
    if (nextId != 0) {
        book.offer[nextId].prevId = newId;
    }
    book.offer[newId].nextId = nextId;
    book.offer[newId].prevId = prevId;
    book.offer[prevId].nextId = newId;
}

/* solhint-disable func-visibility */
