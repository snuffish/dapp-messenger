//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol"; 
import { User } from "./User.sol";
import { Message } from  "./Message.sol";


contract Application is Ownable, User, Message {

    mapping(address => uint256[]) private userMessages;
   
    constructor(address initOwner) Ownable(initOwner) {
        // console.log()
    }

    function destroy() external onlyOwner {
        // selfdestruct(payable(owner()));
    }
}
