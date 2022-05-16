// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library OfferBookLib {
    /// @return offerId the id of the newly created offer
    function insert(Storage.OfferBook storage book, uint256 amount, Storage.Ray calldata valueToLoan) external returns(uint256) {
        uint256 cursor = book.firstId;
        book.lastIdCreated++; // id 0 is reserved to null
        uint256 newId = book.lastIdCreated;
        uint256 firstId = book.firstId;

        book.offers[newId].amount = amount;
        book.offers[newId].valueToLoan.v = valueToLoan.v;
        if (cursor == 0) { // insertion in empty bookn
            book.firstId = newId;
            return newId;
        }
        uint256 prevCursor = cursor;
        while (valueToLoan.v <= book.offers[cursor].valueToLoan.v) {
            prevCursor = cursor;
            cursor = book.offers[cursor].nextId;
        }
        uint256 newNext = book.offers[cursor].nextId;
        if (cursor == firstId){
            book.firstId = newId;
        } else {
            book.offers[cursor].nextId = newId;
        }
        book.offers[newId].nextId = newNext;
        
        return newId;
    }
}