// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library OfferBookLib {
    /// @return offerId the id of the newly created offer
    /// @dev amount and valueToLoan must have been checked before calling & non 0
    function insert(Storage.OfferBook storage book, uint256 amount, uint256 valueToLoan) external returns(uint256) {
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

        if (cursor == firstId){ // first place
            book.firstId = newId;
            book.offer[newId].nextId = cursor;
            if (cursor != 0){
                book.offer[cursor].prevId = newId;
            }
        } else { // normal scenario
            if (cursor != 0){
                book.offer[cursor].prevId = newId;
            }
            book.offer[newId].nextId = cursor;
            book.offer[newId].prevId = prevId;
            book.offer[prevId].nextId = newId;
        }
        
        return newId;
    }

    function remove(Storage.OfferBook storage book, uint256 offerId) external {
        require(offerId <= book.numberOfOffers);
        require(!book.offer[offerId].isRemoved);

        book.offer[offerId].isRemoved = true;

        uint256 nextId = book.offer[offerId].nextId;
        uint256 prevId = book.offer[offerId].prevId;

        if(offerId == book.firstId) {book.firstId = nextId;}
        if(prevId !=0) {book.offer[prevId].nextId = nextId;}
        if(nextId !=0) {book.offer[nextId].prevId = prevId;}
    }
}