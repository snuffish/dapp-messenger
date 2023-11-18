// // @ts-nocheck
// import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
// import { expect } from 'chai';
// import { run } from 'hardhat';

// const deployContractFixture = async () => {
//     const Messenger = await ethers.getContractFactory("Messenger");
//     const [owner, addr1, addr2] = await ethers.getSigners();

//     const contract = await Messenger.connect(owner).deploy();

//     await contract.deployed();

//     return { contract, owner, addr1, addr2 };
// }

// describe('Messenger contract', () => {
//     describe('Deployment', () => {
//         it('Should be right owner', async () => {
//             const { contract, owner } = await loadFixture(deployContractFixture);

//             expect(await contract.getOwner()).eq(owner.address)
//         })
//     })

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

// })