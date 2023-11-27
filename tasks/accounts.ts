// @ts-nocheck

task('accounts', 'Print list of accounts', async () => {
    const accounts = await ethers.getSigners()
    return accounts.flatMap(item => [item.address])
})

export default {} 
