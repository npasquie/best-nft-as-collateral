// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "./Storage/Storage.sol";

/// @notice getters for external queries of Polypus internal state
abstract contract Lens is Storage {
    function getOffer(IERC721 asset, uint256 offerId)
        external
        view
        returns (Offer memory)
    {
        return bookOf[asset].offer[offerId];
    }

    function getOfferIdOf(IERC721 asset, address supplier)
        external
        view
        returns (uint256)
    {
        return bookOf[asset].offerIdOf[supplier];
    }
}
