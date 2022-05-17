// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "forge-std/Test.sol";

import "../OfferBookLib.sol";
import "../Storage.sol";

contract MockAsset is ERC721 {
    uint256 public placeholder;

    constructor() ERC721("MockAsset", "MA") {
        placeholder++;
    }
}

contract TestOfferBookLib is Storage, Test {
    using OfferBookLib for OfferBook;

    Vm public fvm = Vm(HEVM_ADDRESS);

    IERC721 internal asset = new MockAsset();

    function setUp() public {
        asset = new MockAsset();
    }

    function testInsertInEmpty(uint256 amount, uint256 valueToLoan) public {
        fvm.assume(valueToLoan > 0);
        OfferBook storage book = bookOf[asset];
        book.insert(amount, valueToLoan);
        require(book.offer[book.firstId].amount == amount, "amount");
        require(
            book.offer[book.firstId].valueToLoan == valueToLoan,
            "valueToLoan"
        );
        require(book.firstId == 1, "firstId");
        require(book.numberOfOffers == 1, "numberOfOffers");
        require(book.offer[1].nextId == 0, "nextId");
    }

    function testInsertMultiple() public {
        uint256 cursor;
        uint256 value;

        OfferBook storage book = bookOf[asset];

        book.insert(124, 235);
        book.insert(342, 345);
        book.insert(564, 43);
        book.insert(23, 65);
        book.insert(564, 23);

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
