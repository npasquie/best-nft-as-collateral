// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

interface ICEth {
    function mint() external payable;

    function redeemUnderlying(uint256) external returns (uint256);
}
