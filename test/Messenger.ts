// @ts-nocheck
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { expect } from 'chai';
import { run } from 'hardhat';

const deployContractFixture = async () => {
    const Messenger = await ethers.getContractFactory('Messenger');
    const [owner, addr1, addr2] = await ethers.getSigners();

    const contract = await Messenger.deploy(); 

    await contract.deployed();

    return { contract, owner, addr1, addr2 };
}

let _contract

const createAccount = async (signer, username) => _contract.connect(signer).createAccount(username)
const addFriend = async (signer, friendKey) => _contract.connect(signer).addFriend(friendKey)
const getFriends = async (signer) => _contract.connect(signer).getFriends()
const sendMessage = async (signer, friendKey, message) => _contract.connect(signer).sendMessage(friendKey, message)

describe('Messenger contract', () => {
    describe('Deployment', () => {
        it('Should be right owner', async () => {
            const { contract, owner } = await loadFixture(deployContractFixture);        
    
            expect(await contract.owner()).eq(owner.address)
        })
    })

    describe('Account', () => {
        const user1 = 'user1'
        const user2 = 'user2'
        const message = 'Test message'

        it ('Create user1 & user2 and add as friends and send a message', async () => {
            const { contract, addr1, addr2 } = await loadFixture(deployContractFixture);
            _contract = contract
            
            await expect(createAccount(addr1, user1)).to.not.reverted
            await expect(createAccount(addr1, user1)).to.revertedWith('User already exists!')

            await expect(createAccount(addr2, user2)).to.not.reverted
            await expect(createAccount(addr2, user2)).to.revertedWith('User already exists!')

            await expect(addFriend(addr1, addr2.address)).to.not.reverted

            const user1Friends = await getFriends(addr1)
            expect(user1Friends[0].pubkey).to.equal(addr2.address)

            const user1MessageToUser2 = contract.connect(addr1).sendMessage(addr2.address, message)

            await expect(user1MessageToUser2)
                .to.emit(contract, 'MessageSent')
                .withArgs(addr1.address, addr2.address)
        })

        // it('Add friend', async () => {
        //     // const { contract, addr1, addr2 } = await loadFixture(deployContractFixture);

        //     const createUser1 = contract.connect(addr1).createAccount(user1)
        //     await expect(createUser1).to.not.reverted
        // })
    })

    // describe('Messages', () => {
    //     const message = 'Test message'
    //     it('Send message', async () => {
    //         const { contract, addr1, addr2 } = await loadFixture(deployContractFixture);
            
    //         const sendMessageTx = contract.connect(addr1).sendMessage(addr2.address, message)

    //         await expect(sendMessageTx)
    //             .to.emit(contract, 'MessageSent')
    //             .withArgs(addr1.address, addr2.address)
    //     })

    //     it('Send message and recipient received it', async () => {
    //         const { contract, addr1, addr2 } = await loadFixture(deployContractFixture);
            
    //         const sendMessageTx = contract.connect(addr1).sendMessage(addr2.address, message)

    //         await expect(sendMessageTx)
    //             .to.emit(contract, 'MessageSent')
    //             .withArgs(addr1.address, addr2.address)

    //         const msg = (await contract.connect(addr2).getMessages(addr1.address))[0]
    //         expect(msg.sender).equals(addr1.address)
    //         expect(msg.message).equals(message)
    //     })
    // })
})

//     describe('Send message', () => {
//         it('Send message from addr1 to addr2', async () => {
            
//         })

//         it('Send message and expect emitted event "MessageSent" event', async () => {
//         })
//     })


//     describe('Get messages', () => {
//         it('Get the first message for addr2', async () => {

//         })
//     })

//     describe('Delete contract', () => {
//         it('User addr1 cant destroy contract', async () => {
//         })

//         it('Owner can destroy contract', async () => {
//         })
//     })

