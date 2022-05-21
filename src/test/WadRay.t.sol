// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "forge-std/Test.sol";

import "../WadRayMath.sol";

/// @notice test suite for WadRayMath library
contract TestWadRayMath is Test {
    using WadRayMath for uint256;
    using WadRayMath for Ray;

    function testDivToRay() public {
        uint256 a = WAD;
        uint256 b = WAD / 2;
        assertEq(a.divToRay(b).ray, RAY * 2);
    }

    function testDivWadByRay() public {
        uint256 a = WAD;
        Ray memory b = Ray({ray: RAY / 2});
        assertEq(a.divWadByRay(b).ray, RAY * 2);

        a = WAD / 2;
        b.ray = 2 * RAY;
        assertEq(a.divWadByRay(b).ray, RAY / 4);
    }

    function testMulByWad() public {
        Ray memory a = Ray({ray: 2 * RAY});
        uint256 b = 3 * WAD;
        assertEq(a.mulByWad(b), 6 * WAD);
    }
}
