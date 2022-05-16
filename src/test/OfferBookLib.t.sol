// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "forge-std/Test.sol";

import "../OfferBookLib.sol";
import "../Storage.sol";

contract TestOfferBookLib is Storage, Test {
    using OfferBookLib for OfferBook;

    Vm public fvm = Vm(HEVM_ADDRESS);

    uint256 testIndex;

    function setUp() public {
        testIndex++;
    }

    function testInsertInEmpty(uint256 amount, uint256 valueToLoan) public {
        fvm.assume(valueToLoan > 0);
        OfferBook storage book = books[testIndex];
        book.insert(amount, valueToLoan);
        require(book.offers[book.firstId].amount == amount, "amount");
        require(book.offers[book.firstId].valueToLoan == valueToLoan, "valueToLoan");
        require(book.firstId == 1, "firstId");
        require(book.numberOfOffers == 1, "numberOfOffers");
        require(book.offers[1].nextId == 0, "nextId");
    }

    function testInsertMultiple() public {
        uint256 cursor;
        uint256 value;

        OfferBook storage book = books[testIndex];

        book.insert(124, 235);
        book.insert(342, 345);
        book.insert(564, 43);
        book.insert(23, 65);
        book.insert(564, 23);

        cursor = book.firstId;
        
        for(uint256 i; i < book.numberOfOffers; i++){
            value = book.offers[cursor].valueToLoan;
            require(value >= book.offers[book.offers[cursor].nextId].valueToLoan, "order");
            if (book.offers[cursor].nextId == 0) {
                require(i == book.numberOfOffers - 1, "number");
            }
            cursor = book.offers[cursor].nextId;
        }
    }

    // function testVisualTest() public {
    //     OfferBook storage book = books[testIndex];

    //     book.insert(124, Storage.Ray(235)); // 1
    //     book.insert(342, Storage.Ray(345)); // 2
    //     book.insert(342, Storage.Ray(46)); // 3
    //     book.remove(3);
    //     book.insert(342, Storage.Ray(246425)); // 4
    //     book.insert(342, Storage.Ray(3412345)); // 5
    //     book.insert(342, Storage.Ray(344)); // 6
    //     book.remove(1);
    //     book.remove(6);
    //     book.insert(342, Storage.Ray(345)); // 7
    //     book.insert(342, Storage.Ray(346455)); // 8
    //     book.insert(564, Storage.Ray(43)); // 9
    //     book.insert(23, Storage.Ray(65)); // 10
    //     book.insert(564, Storage.Ray(23)); // 11
    //     book.remove(10);

    //     uint256 cursor = book.firstId;

    //     while(cursor != 0){
    //         console.log("current", cursor);
    //         console.log("value  ", book.offers[cursor].valueToLoan.ray);
    //         console.log("prev   ", book.offers[cursor].prevId);
    //         console.log("next   ", book.offers[cursor].nextId);
    //         console.log("==========");

    //         cursor = book.offers[cursor].nextId;
    //     }
    // }
}