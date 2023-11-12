const { task } = require("hardhat/config");
const contractAddress = require('./frontend/src/contracts/contract-address.json')

require("@nomicfoundation/hardhat-toolbox");

require("./tasks/faucet");

task('accounts', 'Print list of accounts', async () => {
  const accounts = await ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
  }
})

task('sendMessage', 'Send a message')
  .addOptionalParam('from', 'From address')
  .addPositionalParam('to', 'To address')
  .addPositionalParam('message', 'Message to send')
  .setAction(async ({ from, to, message }) => {
    const signers = await ethers.getSigners()
    let selectedSigner = signers.filter(item => item.address === from).pop()
    if (!selectedSigner) selectedSigner = signers[0]
    
    const contract = await ethers.getContractAt('Messenger', contractAddress.Messenger)

    const tx = await contract.connect(selectedSigner).sendMessage(to, message)
    console.log(await tx.wait())
  })

task('getMessages', 'Get Messages')
  .addPositionalParam('from', 'From address')
  .setAction(async ({ from }) => {
    const signers = await ethers.getSigners()
    let selectedSigner = signers.filter(item => item.address === from).pop()
    
    const contract = await ethers.getContractAt('Messenger', contractAddress.Messenger)

    console.log(await contract.connect(selectedSigner).getMessages())
  })

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost'
}
