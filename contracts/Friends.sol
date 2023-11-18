//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "hardhat/console.sol";

 contract Friends {
    string private name;

    constructor() {

    }

    function getName() public view returns (string memory) {
        return name;
    }
 }