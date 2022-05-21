// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "../Storage/Storage.sol";
import "./InsertLogic.sol";

library OfferBookLib {
    using OfferBookLib for OfferBook;

    /// @return newId the id of the newly created offer
    /// @dev amount and valueToLoan must have been checked before calling
    /// @dev amount and valueToLoan must both be above 0
    function insert(
        OfferBook storage book,
        uint256 amount,
        uint256 valueToLoan,
        address supplier
    ) external returns (uint256 newId) {
        if (amount == 0 || valueToLoan == 0) {
            revert valueOutOfRange();
        }
        if (book.offerIdOf[supplier] != 0) {
            revert insertForExistentSupplier();
        }

        newId = insertLogic(book, amount, valueToLoan);
        book.offer[newId].supplier = supplier;
        book.available += amount;
    }

    /// @notice removes the offer from the book
    function remove(OfferBook storage book, uint256 offerId) external {
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

        book.available -= book.offer[offerId].amount;
    }

    /// @notice changes the amount of an update, considers it as a new offer
    /// @dev as ordering depends on valueToLoan only,
    /// @dev it doesn't need to be redone
    function updateAmount(
        OfferBook storage book,
        uint256 newAmount,
        uint256 id
    ) external {
        uint256 newId = ++book.numberOfOffers;

        book.offer[newId] = book.offer[id];
        book.offer[id].isRemoved = true;
        book.offer[newId].amount = newAmount;
        book.offer[book.offer[id].prevId].nextId = newId;
        book.offer[book.offer[id].nextId].prevId = newId;
        book.available = book.available - book.offer[id].amount + newAmount;
    }
}
