const hre = require("hardhat");

async function main() {
  const candidateNames = ["Alice", "Bob", "Charlie"];
  const VotingContract = await hre.ethers.getContractFactory("VotingContract");
  const votingContract = await VotingContract.deploy(candidateNames);

  await votingContract.deployed();
  console.log("Contract deployed to:", votingContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});