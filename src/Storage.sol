// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

/// @notice Storage for the NFT-aC protocol
/// @dev meant for the other modules to be inherited from
contract Storage {
    using EnumerableSet for EnumerableSet.Bytes32Set;

    /// @notice data for 1 timeframe & 1 asset
    /// @dev all amounts are in ETH
    /// @dev suppliers/borrowers positions are NFTs, we use uint256 id
    /// @member supplyIndex : sum of users supply indexes
    struct PoolUnit {
        uint256 nbOfSuppliers;
        uint256 nbOfBorrowers;
        uint256 totalSupplied;
        uint256 totalBorrowed;
        uint256 supplyIndex;
        uint256 totalReimbursed;
        uint256 totalInterestsPaid;
        uint256 totalSold;
        uint256 nbOfAssetsSold;
        mapping(uint256 => uint256) valueToLoanOfSupplier;
        mapping(uint256 => uint256) amountSuppliedBy;
        mapping(uint256 => uint256) amountBorrowedBy;
    }

    /// POOLS

    /// @notice set of all hashs of asset pools supported
    /// @dev hash formed from addresses in ascending order
    EnumerableSet.Bytes32Set internal assetPools;

    /// @notice list of assets by pool hash
    mapping(bytes32 => address[]) public assetPool;

    /// EPOCHS ///

    /// @notice greater common divisor of all pool durations
    uint256 public constant EPOCH_UNIT = 2 weeks;

    /// @notice availble durations for pools, in number of epochs
    uint8[] public DURATIONS = [1,3];

    /// @notice pool of liquidity for 1 asset and 1 timeframe
    /// @dev duration index => start date => asset => poolUnit
    mapping(uint8 => mapping(uint256 => mapping(address => PoolUnit))) public poolUnit;

    /// @notice get asset pools that can be deposited into or
    /// @notice borrowed from
    /// @return hashs of assetPools
    function getAssetPools() external view returns(bytes32[] memory){
        return assetPools.values();
    }
}