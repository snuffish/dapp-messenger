import { task } from "hardhat/config"

task('test1')
    .setAction(async () => {
        console.log("KAAA")
    })


export default {}