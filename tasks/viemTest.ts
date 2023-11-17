// @ts-nocheck
import contractAddress from '../frontend/src/contracts/contract-address.json'

task('getMessages', 'Get messages')
.setAction(async () => {
    const contract = await hre.viem.getContractAt('Messenger', contractAddress.Messenger)

    console.log(await contract.read.getMessages())
})

task('sendMessage', 'Send message')
.addPositionalParam('to', 'To address')
.addPositionalParam('message', 'Message')
.setAction(async ({ to, message }) => {
    const contract = await hre.viem.getContractAt('Messenger', contractAddress.Messenger)
    console.log(await contract.write.sendMessage([to, message]))

    // console.log(await contract.read.sendMessage(to, message))
})



export default {}


// task('getMessages', 'Get Messages')
//   .addPositionalParam('from', 'From address')
//   .setAction(async ({ from }) => {
//     const signers = await ethers.getSigners()
//     let selectedSigner = signers.filter(item => item.address === from).pop()
    
//     const contract = await ethers.getContractAt('Messenger', contractAddress.Messenger)

//     if (selectedSigner)
//       console.log(await contract.connect(selectedSigner).getMessages())
//   })


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