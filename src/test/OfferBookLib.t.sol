// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../OfferBookLib.sol";
import "../Storage.sol";

contract TestOfferBookLib is Storage {
    using OfferBookLib for OfferBook;

    uint256 testIndex;

    function setUp() public {
        testIndex++;
    }

    function testInsertInEmpty(uint256 amount, uint256 valueToLoan) public {
        OfferBook book = books[testIndex];
        book.insert(amount, Ray(valueToLoan));
        require(book.offers[book.firstId].amount == amount);
        require(book.offers[book.firstId].valueToLoan.v == valueToLoan);
        require(book.firstId == 1);
        require(book.lastIdCreated == 1);
        require(book.offers[1].nextId == 0);
    }

    function testInsertMultiple(uint256[5] memory amounts, uint256[5] memory valuesToLoan) public {
        OfferBook book = books[testIndex];
        for(uint256 i; i < 5; i++){
            book.insert(amounts[i], Ray(valuesToLoan[i]));
        }
    }
}