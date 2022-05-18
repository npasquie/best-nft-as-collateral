// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./Storage.sol";

library WadRayMath {
    function mul(Ray memory a, Ray memory b)
        internal
        pure
        returns (Ray memory)
    {
        return Ray({ray: (a.ray * b.ray) / RAY});
    }

    function div(Ray memory a, Ray memory b)
        internal
        pure
        returns (Ray memory)
    {
        return Ray({ray: (a.ray * RAY) / b.ray});
    }

    /// @notice returns a WAD
    function mulByWad(Ray memory a, uint256 b) internal pure returns (uint256) {
        return (a.ray * b) / RAY;
    }

    function lt(Ray memory a, Ray memory b) internal pure returns (bool) {
        return a.ray < b.ray;
    }

    function divWadByRay(uint256 a, Ray memory b)
        internal
        pure
        returns (Ray memory)
    {
        return Ray({ray: (a * (RAY * RAY)) / (b.ray * WAD)});
    }

    function divToRay(uint256 a, uint256 b) internal pure returns (Ray memory) {
        return Ray({ray: (a * RAY) / b});
    }
}
