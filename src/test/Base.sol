// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "forge-std/Test.sol";

import "../Polypus.sol";
import "./MockNFT.sol";

/// @notice Base for Polypus test contracts
abstract contract Base is Test {
    Vm public fvm = Vm(HEVM_ADDRESS);

    MockNFT internal mockNft = new MockNFT();
    Polypus internal plp;

    function setUp() public {
        plp = new Polypus();
        plp.createMarket(mockNft);
    }
}
