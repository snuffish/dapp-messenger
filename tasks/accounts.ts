// @ts-nocheck
import contractAddress from '../frontend/src/contracts/contract-address.json'

task('accounts', 'Print list of accounts', async () => {
    const accounts = await ethers.getSigners()
    return accounts.flatMap(item => [item.address])
})

task('createAccount', 'Create Account')
    .addPositionalParam('username', 'Username')
    .setAction(async ({ username }) => {
    const contract = await ethers.getContractAt('Messenger', contractAddress.MessengerAddress)
    const signers = await ethers.getSigners()
    
    const tx = await contract.connect(signers.pop()).createAccount(username)
    console.log(await tx.wait())
})

task('addFriend', 'Add friend')
    .setAction(async () => {
    const contract = await ethers.getContractAt('Messenger', contractAddress.MessengerAddress)
    const signers = await ethers.getSigners()
    
    const tx = await contract.connect(signers.pop()).addFriend(signers[0].address)
    console.log(tx)
})




export default {} 
