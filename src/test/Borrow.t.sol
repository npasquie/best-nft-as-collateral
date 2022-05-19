// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Base.sol";

/// @notice test suite for the borrow user-facing method
contract TestBorrow is Base {
    function testBorrow() public {
        fvm.deal(address(this), 2 ether);
        plp.supply{value: 2 ether}(mockNft, 1 ether);
        mockNft.mint(2);
        mockNft.approve(address(plp), 1);
        mockNft.approve(address(plp), 2);
        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 1;
        tokenIds[1] = 2;
        assertEq(address(this).balance, 0);
        plp.borrow(mockNft, tokenIds);
        assertEq(mockNft.balanceOf(address(this)), 0);
        assertEq(mockNft.balanceOf(address(plp)), 2);
        assertEq(address(this).balance, 2 ether);
        assertEq(address(plp).balance, 0);
    }
}
