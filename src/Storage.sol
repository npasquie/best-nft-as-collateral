// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

// improvement suggestions :
// - switch to ERC1155
// - use an abstraction to support sub-collections, fungibles & ERC1155
// - use a red-black binary tree
// - optimize
// - use NFTs to represent positions
// - use custom errors
// - use wad or ray for valueToLoan
// - rename valueToLoan
// - use only singular for mappings
// - borrow less than full nft value
// - borrow from multiple markets at once
// - change Storage contract name to name not confusing with parameter type
// - create solhint plugin to disallow more than 100-lines files

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @notice half of an order book, only loan offers
/// @notice made by suppliers for borrowers
/// @dev this is a double-linked list
struct OfferBook {
    bool isActive;
    mapping(uint256 => Offer) offer;
    uint256 firstId;
    uint256 numberOfOffers;
    mapping(address => uint256) offerIdOf;
    mapping(address => BorrowerPosition) borrowerPositionOf;
}

struct Offer {
    bool isRemoved;
    uint256 amount;
    uint256 valueToLoan;
    uint256 nextId;
    uint256 prevId;
    address supplier;
}

struct BorrowerPosition {
    mapping(uint256 => bool) hasProvidedToken;
    mapping(uint256 => uint256) dateOfProvidingToken;
    uint256 nbOfTokensProvided;
}

/// @notice Storage for Polypus protocol
abstract contract Storage {
    uint256 public numberOfBooks;
    uint256 public minimumDepositableValue;
    uint256 public minimumValueToLoan;
    uint256 public loanDuration;

    /// @dev asset (nft) => OfferBook
    mapping(IERC721 => OfferBook) public bookOf;

    constructor() {
        minimumDepositableValue = 1 ether / 100; // 0.01
        minimumValueToLoan = 0.005 ether;
        loanDuration = 2 weeks;
    }
}
