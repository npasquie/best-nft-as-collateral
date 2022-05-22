// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNFT is ERC721 {
    uint256 public totalSupply;

    // solhint-disable-next-line no-empty-blocks
    constructor() ERC721("MN", "MockNFT") {}

    function mint(uint256 amount) external {
        for (uint256 i; i < amount; i++) {
            _mint(msg.sender, ++totalSupply);
        }
    }
}
