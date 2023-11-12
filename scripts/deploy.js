// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

const deployToken = async (deployer) => {
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Token address:", token.address);

  return token
}

const deployMessenger = async (deployer) => {
  const Messenger = await ethers.getContractFactory('Messenger')
  const messenger = await Messenger.deploy()
  await messenger.deployed()

  console.log("Messenger address:", messenger.address)

  return messenger
}

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const token = await deployToken(deployer)
  const messenger = await deployMessenger(deployer)


  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles([
    ['Token', token],
    ['Messenger', messenger]
  ]);
}

function saveFrontendFiles(data) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  let contactAddressJson = {}
  for (const [name, contract] of data) {
    contactAddressJson = {
      [name]: contract.address,
      ...contactAddressJson
    }

    const ContractArtifact = artifacts.readArtifactSync(name);

    fs.writeFileSync(
      path.join(contractsDir, `${name}.json`),
      JSON.stringify(ContractArtifact, null, 2)
    );
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify(contactAddressJson, undefined, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
