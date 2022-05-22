# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://rinkeby.infura.io/v3/7697fcd995504eec91d5e6fd4514aef3

# forge verify-contract --chain 4 --compiler-version 0.8.14 0x3f0B8745a7090B56735b6657A8E49426D33Db4Bf src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath GXA9WJUJJ5SEN5YFN2ZDH3RAMF3RJHIQFM

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://rinkeby.infura.io/v3/7697fcd995504eec91d5e6fd4514aef3

# forge verify-contract --chain 4 --compiler-version 0.8.14 0xdd5170bdd5579bd0c16ad3d98f4318f6f56506bc src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib GXA9WJUJJ5SEN5YFN2ZDH3RAMF3RJHIQFM 

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:Polypus --private-key \
#  5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc \
#  --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib:0xdd5170bdd5579bd0c16ad3d98f4318f6f56506bc \
#  --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath:0x3f0B8745a7090B56735b6657A8E49426D33Db4Bf \
#  --rpc-url https://rinkeby.infura.io/v3/7697fcd995504eec91d5e6fd4514aef3

# forge verify-contract --chain 4 --compiler-version 0.8.14 0xeeaf34d0613fe0786ca238bd1d4ac97ab8bd681e src/Flat/Comp-Rinkeby/PolypusFlat.sol:Polypus GXA9WJUJJ5SEN5YFN2ZDH3RAMF3RJHIQFM

### POLYGON MUMBAI ###

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://matic-mumbai.chainstacklabs.com

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://matic-mumbai.chainstacklabs.com

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:Polypus --private-key \
#  5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc \
#  --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib:0xbf1098c21ca57db24bd1bb038485752bfdd44d73 \
#  --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath:0xadc861e1301aaa6294eacbe3e83862efbcac18d0 \
#  --rpc-url https://matic-mumbai.chainstacklabs.com

### ARBITRUM RINKEBY ###

# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://rinkeby.arbitrum.io/rpc
# 0xbf1098c21ca57db24bd1bb038485752bfdd44d73
# forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath --private-key 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc --rpc-url https://rinkeby.arbitrum.io/rpc
# 0xadc861e1301aaa6294eacbe3e83862efbcac18d0

forge create src/Flat/Comp-Rinkeby/PolypusFlat.sol:Polypus --private-key \
 5bb790627f7e5b86c28a82cb9f24cc0b4d773853edd668acda6358e5cac287bc \
 --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:OfferBookLib:0xbf1098c21ca57db24bd1bb038485752bfdd44d73 \
 --libraries src/Flat/Comp-Rinkeby/PolypusFlat.sol:WadRayMath:0xadc861e1301aaa6294eacbe3e83862efbcac18d0 \
 --rpc-url https://rinkeby.arbitrum.io/rpc