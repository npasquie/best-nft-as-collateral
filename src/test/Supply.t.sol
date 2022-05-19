// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Base.sol";

/// @notice test suite for the supply user-facing method
contract TestSupply is Base {
    // sadly OfferBookLib.insert call cannot be encoded & mocked

    function testSupply() public {
        fvm.deal(address(this), 1 ether);

        plp.supply{value: 1 ether}(mockNft, 2 ether);

        assertEq(address(this).balance, 0);
        assertEq(address(plp).balance, 1 ether);

        Offer memory newOffer = plp.getOffer(mockNft, 1);

        assertEq(newOffer.supplier, address(this));
        assertEq(newOffer.amount, 1 ether);
        assertEq(newOffer.valueToLoan, 2 ether);
    }
}
