// @ts-nocheck
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { expect } from 'chai';
import { run } from 'hardhat';

const deployContractFixture = async () => {
    const Application = await ethers.getContractFactory('Application');
    const [owner, addr1, addr2] = await ethers.getSigners();

    const contract = await Application.connect(owner).deploy(owner.address);

    await contract.deployed();

    return { contract, owner, addr1, addr2 };
}

describe('Application contract', () => {
    describe('Deployment', () => {
        it('Should be correct owner', async () => {
            const { contract, owner } = await loadFixture(deployContractFixture);

            expect(await contract.owner()).to.be.equal(owner.address)
        })

        it('Destroy contract', async () => {
            const { contract, owner, addr1 } = await loadFixture(deployContractFixture);

            await expect(contract.destroy()).not.reverted
        })
    })
})