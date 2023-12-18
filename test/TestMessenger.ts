// @ts-nocheck
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { expect } from 'chai';
import { run } from 'hardhat';
import { Contract } from 'hardhat/internal/hardhat-network/stack-traces/model';

const deployContractFixture = async () => {
    const Messenger = await ethers.getContractFactory('Messenger');
    const [owner, addr1, addr2] = await ethers.getSigners();

    const contract = await Messenger.deploy(); 

    await contract.deployed();

    return { contract, owner, addr1, addr2 };
}

type SetupProps = {
    contract: any,
    addr1: any,
    addr2: any
}

let setup: SetupProps

const createAccount = async (signer, username) => setup.contract.connect(signer).createAccount(username)
const addFriend = async (signer, friendKey) => setup.contract.connect(signer).addFriend(friendKey)
const getFriends = async (signer) => setup.contract.connect(signer).getFriends()
const sendMessage = async (signer, friendKey, message) => setup.contract.connect(signer).sendMessage(friendKey, message)
const getMessages = async (signer, friendKey) => setup.contract.connect(signer).getMessages(friendKey)
const getUsername = async (signer) => setup.contract.connect(signer).getUsername()

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

        before(async () => {
            const { contract, addr1, addr2 } = await loadFixture(deployContractFixture);
            setup = { contract, addr1, addr2 }

            await expect(createAccount(addr1, user1)).to.not.reverted
            await expect(createAccount(addr1, user1)).to.revertedWith('User already exists!')

            await expect(createAccount(addr2, user2)).to.not.reverted
            await expect(createAccount(addr2, user2)).to.revertedWith('User already exists!')
        })

        it('User1 add user2 as a friend', async () => {
            const { addr1, addr2 } = setup

            await expect(addFriend(addr1, addr2.address)).to.not.reverted
        })

        it('User1 friends', async () => {
            const { addr1, addr2 } = setup

            const friends = await getFriends(addr1)
            expect(friends[0].pubkey).to.equal(addr2.address)
        })

        it('Send message from User1 to User2', async () => {
            const { contract, addr1, addr2 } = setup

            const messageTx = sendMessage(addr1, addr2.address, message)

            await expect(messageTx)
                .to.emit(contract, 'MessageSent')
                .withArgs(addr1.address, addr2.address)
        })

        it('Get messages sent from User1 to User2', async () => {
            const { contract, addr1, addr2 } = setup

            const messagesList = await getMessages(addr1, addr2.address)
            expect(messagesList[0].sender).to.equal(addr1.address)
            expect(messagesList[0].message).to.equal(message)
        })

        it('Get messages sent from User2 to User1', async () => {
            const { contract, addr1, addr2 } = setup

            const messagesList = await getMessages(addr2, addr1.address)
            expect(messagesList[0].sender).to.equal(addr1.address)
            expect(messagesList[0].message).to.equal(message)
        })

        it('Get User1 Username', async () => {
            const { addr1 } = setup

             const user1GetUsername = await getUsername(addr1)
            expect(user1GetUsername).to.equal(user1)
        })

        it('Get User1 Username', async () => {
            const { addr2 } = setup
            
            const user2GetUsername = await getUsername(addr2)
            expect(user2GetUsername).to.equal(user2)
        })
    })
})
   