//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "hardhat/console.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

struct User {
    address addr;
    string username;
}

struct Message {
    address from;
    address to;
    string message;
}

contract Application is Ownable {
    uint256 messageCount;
    mapping(uint256 => Message) messages;

    uint256 userCount;
    mapping(uint256 => User) users;

    constructor(address initOwner) Ownable(initOwner) {
        
    }

    event MessageSent(address indexed from, address indexed to, string message);

    function sendMessage(address to, string memory message) public {
        messageCount++;
        messages[messageCount] = Message(msg.sender, to, message);

        emit MessageSent(to, msg.sender, message);
    }

    function getMessage(uint256 id) public view returns (Message memory) {
        return messages[id];
    }

    function createUser(string memory username) public {
        // for (uint i = 0; i < userCount; i++) {
        //     if (users[i].username == username) {

        //     }
        // }
        // require();
    }

    function destroy() external onlyOwner {
        selfdestruct(payable(owner()));
    }
}
