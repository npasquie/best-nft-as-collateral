// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./Interfaces/ICEth.sol";
import "./Interfaces/ILendingPool.sol";

interface IWETH is IERC20 {
    function deposit() external payable;

    function withdraw(uint256 wad) external;
}

/// @notice config constants for Polypus
abstract contract Config {
    /// RINKEBY ///
    // ICEth internal constant CETH =
    //     ICEth(0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e);
    /// MUMBAI ///
    uint16 internal constant NO_REFERRAL_CODE = 0;
    // ILendingPool internal constant AAVE_LENDING_POOL =
    //     ILendingPool(0x1758d4e6f68166C4B2d9d0F049F33dEB399Daa1F);
    // IWETH internal constant WMATIC =
    //     IWETH(0xb685400156cF3CBE8725958DeAA61436727A30c3);
    /// ARBITRUM ///
    ILendingPool internal constant AAVE_LENDING_POOL =
        ILendingPool(0x9C55a3C34de5fd46004Fa44a55490108f7cE388F);
    IWETH internal constant WETH =
        IWETH(0x5eb35Fe1f1074Ae8d6D23Bf771705846Cc812c09);
}
