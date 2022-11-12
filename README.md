# nft-collection-
basic nft collection that we created using erc721 standard, and minting website to mint nfts

in this repo i only create an basic erc721 contract so please don't use this repo in you real porjects 

1.in this repo we use hardhat to create smart contract you can install hardhat by running :
```
yarn add --dev hardhat 
``` 
and then install these packages :
```
yarn add --dev @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
```
and then run :
```
yarn hardhat
```
install dotenv :
```
yarn add dotenv
```

you can create a simple java scripts 



2. after that you need to install openzepplin by running :
```
yarn add @openzeppelin/contracts
``` 

# now after we create the contract you can start with mint website that we use next js 
```
npx create-next-app@latest
```

and then install both ethers and web3modal :
```
npm install ethers web3modal 
```
