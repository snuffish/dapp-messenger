import { Contract } from "ethers"
import { ethers, network } from "hardhat"
import fs from 'fs'
import path from 'path'

type ContractConfig = {
  [key: string]: {
    args: any[]
  }
}

type DeployedContract = [string, Contract]

const ContractsConfig: ContractConfig = {
  Messenger: {
    args: []
  }
  // Application: {
  //   args: []
  // },
  // Token: {
  //   args: []
  // },
  // Friends: {
  //   args: []
  // }
}

const deployContract = async (name: string, args: any[]): Promise<DeployedContract> => {
  const ContractFactory = await ethers.getContractFactory(name)
  const contract = await ContractFactory.deploy(...args)
  await contract.deployed()

  console.log(`${name} address: ${contract.address}`)

  return [name, contract]
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

  console.log("Deploying the contracts with the account:", await deployer.getAddress())

  let deployedContracts: DeployedContract[] = []
  for (const [name, params] of Object.entries(ContractsConfig)) {
    const deployed = await deployContract(name, params.args)
    deployedContracts.push(deployed)
  }

  saveFrontendFiles(deployedContracts);
}

function saveFrontendFiles(data: DeployedContract[]) {
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
