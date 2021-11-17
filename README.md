
# Smart Contract

Application is used to build and deploy new token (RAJ) with initial supply of 100000

- Token.sol

Client Application built using React. Please view the necessary steps under client folder

## To run the application.

- npm install -g truffle
- npm install  
- Make sure this address has necessary funds - 0xc515DB5834d8f110Eee96C3036854DBF1d87DE2b  
- truffle migrate --network rinkeby --reset --compile-all

## Basic configuration

To modify the configuration of infura project id, please navigate to truffle-config.js
and replace the key at the end of url
https://rinkeby.infura.io/v3/7596fc2db67e49f2b7c3c70bd6f06dd2

Configuration related to initial supply, tokenname can be found at config folder

## Post deployment steps
https://rinkeby.etherscan.io/tx/0xf15e6857702697ca9908a8b0f53ffdd49f3d5ea136cf1cfd9677c2e0df1ca440
