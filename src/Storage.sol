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
        uint256 firstId;
        IERC721 collection;
        uint256 lastIdCreated;
    }

    struct Offer {
        uint256 amount;
        Ray valueToLoan;
        uint256 nextId;
    }

    /// @notice fixed-point decimal number with 27 decimals
    struct Ray {
        uint256 v;
    }

    /// @dev offerBookId => OfferId => Offer
    mapping(uint256 => mapping(uint256 => Offer)) public offers;
    mapping(uint256 => OfferBook) public books;
}