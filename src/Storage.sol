// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

// improvment suggestions : 
// - switch to ERC1155
// - use an abstraction to support sub-collections, fungibles & ERC1155
// - use a red-black binary tree
// - optimize
// - use NFTs to represent positions
// - use custom errors
// - use wad or ray for valueToLoan
// - rename valueToLoan
// - use only singular for mappings

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @notice Storage for Polypus protocol
abstract contract Storage {
    /// @notice half of an order book, only loan offers
    /// @notice made by suppliers for borrowers
    /// @dev this is a double-linked list
    struct OfferBook {
        bool isActive;
        mapping(uint256 => Offer) offer;
        uint256 firstId;
        IERC721 collection;
        uint256 numberOfOffers;
    }

    struct Offer {
        bool isRemoved;
        uint256 amount;
        uint256 valueToLoan;
        uint256 nextId;
        uint256 prevId;
        address supplier;
    }

    struct SupplierPosition {
        // marketId => offerId
        mapping(uint256 => uint256) offerIdOfMarket;
    }

    uint256 public numberOfBooks;
    uint256 public minimumDepositableValue;
    uint256 public minimumValueToLoan;

    /// @dev marketId => OfferBook
    mapping(uint256 => OfferBook) public bookOfId;

    /// @dev supplier => position
    mapping(address => SupplierPosition) internal positionOf;

    constructor() {
        minimumDepositableValue = 1 ether / 100; // 0.01
        minimumValueToLoan = 0.005 ether;
    }
}