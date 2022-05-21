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
// - allow callback on transfer (ofc strict reentrency checks to do)
// - add natspec to every func and contract
// - use ERC721's onERC721Received hook to auto borrow on transfer

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./Types.sol";

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
