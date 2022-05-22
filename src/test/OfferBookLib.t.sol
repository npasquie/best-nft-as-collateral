// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "forge-std/Test.sol";

import "../Storage/Storage.sol";
import "./Base.sol";

contract TestOfferBookLib is Storage, Base {
    using OfferBookLib for OfferBook;

    function testInsertInEmpty() public {
        OfferBook storage book = bookOf[mockNft];
        bookOf[mockNft].insert(10, 10, address(1));
        // require(bookOf[mockNft].offer[book.firstId].amount == amount, "amount");
        // require(
        //     book.offer[book.firstId].valueToLoan == valueToLoan,
        //     "valueToLoan"
        // );
        // require(book.firstId == 1, "firstId");
        // require(book.numberOfOffers == 1, "numberOfOffers");
        // require(book.offer[1].nextId == 0, "nextId");
    }

    function testInsertMultiple() public {
        uint256 cursor;
        uint256 value;

        OfferBook storage book = bookOf[mockNft];

        book.insert(124, 235, address(1));
        book.insert(342, 345, address(2));
        book.insert(564, 43, address(3));
        book.insert(23, 65, address(4));
        book.insert(564, 23, address(5));

        cursor = book.firstId;

        for (uint256 i; i < book.numberOfOffers; i++) {
            value = book.offer[cursor].valueToLoan;
            require(
                value >= book.offer[book.offer[cursor].nextId].valueToLoan,
                "order"
            );
            if (book.offer[cursor].nextId == 0) {
                require(i == book.numberOfOffers - 1, "number");
            }
            cursor = book.offer[cursor].nextId;
        }
    }
}

// todo : need more tests
