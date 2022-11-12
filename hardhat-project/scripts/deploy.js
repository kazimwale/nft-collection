const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

//remember we deploy our contract to mumbai testnet so
//create .env file and add your polygon mumbai testnet api
//then check the hardhat.config.js

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  // please don't share your ipfs cid in public places like github
  //we doing that because this repo is just for learning
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so nftCollectionContract here is a factory for instances of our LW3Punks contract.
  */
  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  // deploy the contract
  const deployedlw3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedlw3PunksContract.deployed();

  // print the address of the deployed contract
  console.log(
    "lw3PunksContract Contract Address:",
    deployedlw3PunksContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
