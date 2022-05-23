const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MintTrx = await hre.ethers.getContractFactory("MintTrx");
  const mintTrx = await MintTrx.deploy("Hello, Hardhat!");

  await mintTrx.deployed();

  console.log("MintTrx deployed to:", mintTrx.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
