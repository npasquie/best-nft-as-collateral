// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library OfferBookLib {
    /// @return offerId the id of the newly created offer
    function insert(Storage.OfferBook storage book, uint256 amount, Storage.Ray calldata valueToLoan) external returns(uint256) {
        require(valueToLoan.ray > 0);
        
        uint256 firstId = book.firstId;
        uint256 cursor = firstId;
        book.numberOfOffers++; // id 0 is reserved to null
        uint256 newId = book.numberOfOffers;

        book.offers[newId].amount = amount;
        book.offers[newId].valueToLoan.ray = valueToLoan.ray;

        uint256 prevId = cursor;

        while (book.offers[cursor].valueToLoan.ray >= valueToLoan.ray) {
            prevId = cursor;
            cursor = book.offers[cursor].nextId;
        }

        if (cursor == firstId){ // first place
            book.firstId = newId;
            book.offers[newId].nextId = cursor;
            if (cursor != 0){
                book.offers[cursor].prevId = newId;
            }
        } else { // normal scenario
            if (cursor != 0){
                book.offers[cursor].prevId = newId;
            }
            book.offers[newId].nextId = cursor;
            book.offers[newId].prevId = prevId;
            book.offers[prevId].nextId = newId;
        }
        
        return newId;
    }

    function remove(Storage.OfferBook storage book, uint256 offerId) external {
        require(offerId <= book.numberOfOffers);
        require(!book.offers[offerId].isRemoved);

        book.offers[offerId].isRemoved = true;

        uint256 nextId = book.offers[offerId].nextId;
        uint256 prevId = book.offers[offerId].prevId;

        book.offers[prevId].nextId = nextId;
        book.offers[nextId].prevId = prevId;
    }
}