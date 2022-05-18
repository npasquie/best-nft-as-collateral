// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

uint256 constant RAY = 1e27;
uint256 constant WAD = 1 ether;

/// @notice half of an order book, only loan offers
/// @notice made by suppliers for borrowers
/// @dev this is a double-linked list
struct OfferBook {
    bool isActive;
    mapping(uint256 => Offer) offer;
    uint256 firstId;
    uint256 numberOfOffers;
    mapping(address => uint256) offerIdOf;
    // mapping(address => BorrowerPosition) borrowerPositionOf;
}

/// @notice loan offer of `supplier`
struct Offer {
    bool isRemoved;
    uint256 amount;
    uint256 valueToLoan;
    uint256 nextId;
    uint256 prevId;
    address supplier;
}

// struct BorrowerPosition {
//     mapping(uint256 => bool) hasProvidedToken;
//     mapping(uint256 => uint256) dateOfProvidingToken;
//     uint256 nbOfTokensProvided;
// }

// struct Loan {
//     address borrower;
//     uint256[] tokenIds;
//     IERC721 market;
//     uint256 date;
//     uint256 amount;
//     uint256 amountSold;
// }

// struct SupplierClaims {

// }

/// @notice 27-decimals fixed-point number
/// @dev this struct must be used systematically to avoid confusions
struct Ray {
    uint256 ray;
}

/// @notice amount or valueToLoan is out of range
error valueOutOfRange();
error alreadyRemoved();
error removeNonExistentOffer();
error unavailableMarket();
error insertForExistentSupplier();
error etherTransferFailed();
