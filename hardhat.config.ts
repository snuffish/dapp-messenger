// @ts-nocheck

import { HardhatUserConfig } from 'hardhat/config'

import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'
import "@nomicfoundation/hardhat-viem"

// import contractAddress from './frontend/src/contracts/contract-address.json'

import './tasks'

// require("./tasks/faucet");

// task('sendMessage', 'Send a message')
//   .addOptionalParam('from', 'From address')
//   .addPositionalParam('to', 'To address')
//   .addPositionalParam('message', 'Message to send')
//   .setAction(async ({ from, to, message }) => {
//     const signers = await ethers.getSigners()
//     let selectedSigner = signers.filter(item => item.address === from).pop()
//     if (!selectedSigner) selectedSigner = signers[0]
    
//     const contract = await ethers.getContractAt('Messenger', contractAddress.Messenger)

//     const tx = contract.connect(selectedSigner).sendMessage(to, message)
//     return tx
//   })

// task('getMessages', 'Get Messages')
//   .addPositionalParam('from', 'From address')
//   .setAction(async ({ from }) => {
//     const signers = await ethers.getSigners()
//     let selectedSigner = signers.filter(item => item.address === from).pop()
    
//     const contract = await ethers.getContractAt('Messenger', contractAddress.Messenger)

//     if (selectedSigner)
//       console.log(await contract.connect(selectedSigner).getMessages())
//   })


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: 'localhost'
}

export default config
