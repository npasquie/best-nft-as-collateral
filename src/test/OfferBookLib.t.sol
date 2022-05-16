// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "forge-std/Test.sol";
// import "forge-std/console.sol";

import "../OfferBookLib.sol";
import "../Storage.sol";

contract TestOfferBookLib is Storage {
    using OfferBookLib for OfferBook;

    uint256 testIndex;

    function setUp() public {
        testIndex++;
    }

    function testInsertInEmpty(uint256 amount, uint256 valueToLoan) public {
        OfferBook storage book = books[testIndex];
        book.insert(amount, Storage.Ray(valueToLoan));
        require(book.offers[book.firstId].amount == amount, "amount");
        require(book.offers[book.firstId].valueToLoan.ray == valueToLoan, "valueToLoan");
        require(book.firstId == 1, "firstId");
        require(book.lastIdCreated == 1, "lastId");
        require(book.offers[1].nextId == 0, "nextId");
    }

    // function testInsertMultiple(uint256[5] memory amounts, uint256[5] memory valuesToLoan) public {
    //     OfferBook storage book = books[testIndex];
    //     for(uint256 i; i < 5; i++){
    //         book.insert(amounts[i], Ray(valuesToLoan[i]));
    //     }
    // }
}