// @ts-nocheck
import { task } from "hardhat/config"
import { contractAddress } from "../frontend/src/contracts"

task('test1')
    .setAction(async () => {
        console.log("KAAA")
    })

task('sendMessage', 'Send a message')
    .addPositionalParam('to', 'Send to address')
    .setAction(async ({ to }) => {
        const contract = await hre.viem.getContractAt('Messenger', contractAddress.MessengerAddress)
        console.log(await contract.read.getMessages([to]))
    })


export default {}
