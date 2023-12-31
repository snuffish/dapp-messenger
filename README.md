# dApp Messenger

This is a messenger chat application/protocol built for the EVM Compatible Blockchains.

Still an early proof-of-concept and and heavily Work-in-Progress solution.

### Requirements (recommended versions)

* node: `v20.8.0`
* npx: `8.19.4`
* hardhat: `2.19.0`
* nvm: `0.39.5`
* solidity: `^0.8.9`

## Project Setup

### Setup the Blockchain and it's associated Smart Contracts etc

##### Clone the repo and install everything following these steps:

* Clone repo: `git clone https://github.com/snuffish/dapp-messenger.git` 
* `cd dapp-messenger`
* `nvm use` ==> Now using node v20.8.0 (npm v10.2.1)
* `nvm install` => Will install dependencies for both `.` & `./app`
* `npm start` ==> Start the blockchain node
* `npm test` ==> Run all tests for errors etc before deploying
* `npm run deploy` ==> Compile and deploy the Project & Contracts on to the chain

#### Setup and run the app (Ether.js) dApp Application

* `nvm use` ==>  Now using node v20.8.0 (npm v10.2.1)
* `npm run app` ==> Start the WebBased Ether.js dApp

----------------------------------------------------------------

### Additional hardhat tasks

* Transfer/add a faucet to an account: `npx hardhat faucet <receiver:address>`
* List all accounts: `npx hardhat accounts`
* Send message: `npx hardhat sendMessage <receiver:address> <message:string>`
* Get Message: `npx hardhat getMessages <from:address>`

----------------------------------------------------------------

***This is powered by Hardhart***
