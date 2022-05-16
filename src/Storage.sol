// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

// improvment suggestions : 
// - switch to ERC1155
// - use an abstraction to support sub-collections, fungibles & ERC1155
// - use a red-black binary tree
// - optimize

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @notice Storage for Polypus protocol
abstract contract Storage {
    /// @notice half of an order book, only loan offers
    /// @notice made by suppliers for borrowers
    /// @dev this is a double-linked list
    struct OfferBook {
        mapping(uint256 => Offer) offers;
        uint256 firstId;
        IERC721 collection;
        uint256 numberOfOffers;
    }

    struct Offer {
        bool isRemoved;
        uint256 amount;
        Ray valueToLoan;
        uint256 nextId;
        uint256 prevId;
    }

    /// @notice fixed-point decimal number with 27 decimals
    struct Ray {
        uint256 ray;
    }

    /// @dev offerBookId => OfferBook
    mapping(uint256 => OfferBook) public books;
}