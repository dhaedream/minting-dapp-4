const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MintTrx = await hre.ethers.getContractFactory("MintTrx");
  // must pass in constructor
  const mintTrx = await MintTrx.deploy("Constructor Name", "CNS");

  await mintTrx.deployed();

  console.log("MintTrx deployed to:", mintTrx.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
