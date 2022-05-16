// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./Storage.sol";
import "./OfferBookLib.sol";

/// @notice all entry points of the Polypus protocol
contract Polypus is Storage, Ownable {
    using OfferBookLib for OfferBook;

    /// ADMIN ///
    function createMarket(IERC721 collection) onlyOwner public {
        bookOfId[numberOfBooks].isActive = true;
        bookOfId[numberOfBooks].collection = collection;
    }

    /// PUBLIC ///
    
    /// @notice supplies to given market with given value to loan.
    /// @notice updates value to loan and adds the new liquidity if already supplied.
    function supply(uint256 marketId, uint256 valueToLoan) public payable {
        require(valueToLoan >= minimumValueToLoan);
        require(bookOfId[marketId].isActive);
        
        uint256 alreadySupplied;
        uint256 prevOfferId = positionOf[msg.sender].offerIdOfMarket[marketId];

        if (prevOfferId != 0) {
            alreadySupplied = bookOfId[marketId].offer[prevOfferId].amount;
            require(msg.value + alreadySupplied >= minimumDepositableValue);
            bookOfId[marketId].remove(prevOfferId);
        } else {
            require(msg.value >= minimumDepositableValue);
        }

        bookOfId[marketId].insert(msg.value + alreadySupplied, valueToLoan);
    }
}