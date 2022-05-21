// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "./Interfaces/ICEth.sol";

/// @notice config constants for Polypus
abstract contract Config {
    /// MAINNET ///
    ICEth internal constant CETH =
        ICEth(0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5);
}
