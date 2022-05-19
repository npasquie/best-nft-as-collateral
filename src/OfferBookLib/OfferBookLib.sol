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
    ) internal returns (uint256 newId) {
        if (amount == 0 || valueToLoan == 0) {
            revert valueOutOfRange();
        }
        if (book.offerIdOf[supplier] != 0) {
            revert insertForExistentSupplier();
        }

        newId = insertLogic(book, amount, valueToLoan);
        book.offer[newId].supplier = supplier;
    }

    /// @notice removes the offer from the book
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

    // todo : there is a smarter way to do this as the position of the offer
    // todo :  won't change in the book if only the amount is updated
    /// @notice remove the offer of `id` and inserts the new offer
    function update(
        OfferBook storage book,
        Offer memory offer,
        uint256 id
    ) internal {
        book.remove(id);
        book.insert(offer.amount, offer.valueToLoan, offer.supplier);
    }
}
