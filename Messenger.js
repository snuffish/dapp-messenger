const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

const deployContractFixture = async () => {
    const Messenger = await ethers.getContractFactory("Messenger");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const contract = await Messenger.connect(owner).deploy();

    await contract.deployed();

    return { contract, owner, addr1, addr2 };
}

describe('Messenger contract', () => {
    const textMessage = 'First message'

    let contract
    let owner
    let addr1
    let addr2

    describe('Deployment', () => {
        it('Should be right owner', async () => {
            const fixture = await loadFixture(deployContractFixture);
            contract = fixture.contract
            owner = fixture.owner
            addr1 = fixture.addr1
            addr2 = fixture.addr2

            expect(await contract.getOwner()).to.be.equal(owner.address)
        })
    })

    describe('Send message', () => {
        let message

        it('Send message from addr1 to addr2', async () => {
            message = await contract.connect(addr1).sendMessage(addr2.address, textMessage)
            expect(message).to.not.be.reverted
        })

        it('Send message and expect emitted event "MessageSent" event', async () => {
            await expect(contract.connect(addr1).sendMessage(addr2.address, textMessage))
                .to.emit(contract, 'MessageSent').withArgs(addr1.address, addr2.address)
        })
    })

    describe('Get messages', () => {
        it('Get the first message for addr2', async () => {
            const message = (await contract.connect(addr2).getMessages())[0]
            
            expect(message['from']).to.be.equal(addr1.address)
            expect(message['text']).to.be.equal(textMessage)
        })
    })

    describe('Delete contract', () => {
        it('User addr1 cant destroy contract', async () => {
            await expect(contract.connect(addr1).destroy()).to.be.revertedWith('caller must be owner')
        })

        it('Owner can destroy contract', async () => {
            await expect(contract.connect(owner).destroy()).to.not.be.reverted
        })
    })
})
