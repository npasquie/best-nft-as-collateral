// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./Storage.sol";
import "./OfferBookLib.sol";

/// @notice all entry points of the Polypus protocol
contract Polypus is Storage, Ownable {
    using OfferBookLib for OfferBook;

    /// ADMIN ///
    function createMarket(IERC721 asset) public onlyOwner {
        bookOf[asset].isActive = true;
    }

    /// PUBLIC ///

    /// @notice supplies to given market with given value to loan.
    /// @notice updates value to loan and adds the new liquidity.
    function supply(IERC721 asset, uint256 valueToLoan) public payable {
        require(valueToLoan >= minimumValueToLoan);
        require(bookOf[asset].isActive);

        uint256 alreadySupplied;
        uint256 prevOfferId = bookOf[asset].offerIdOf[msg.sender];

        if (prevOfferId != 0) {
            alreadySupplied = bookOf[asset].offer[prevOfferId].amount;
            require(msg.value + alreadySupplied >= minimumDepositableValue);
            bookOf[asset].remove(prevOfferId);
        } else {
            require(msg.value >= minimumDepositableValue);
        }

        bookOf[asset].offerIdOf[msg.sender] = bookOf[asset].insert(
            msg.value + alreadySupplied,
            valueToLoan
        );
    }

    // function borrow(IERC721 asset, uint256[] calldata tokenIds) public {

    // }
}
