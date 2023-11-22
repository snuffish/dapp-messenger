//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;      

struct MessageStruct {
    address from;
    address to;
    string message;
}

contract Message {
    uint256 messageCount;
    mapping(uint256 => Message) messages;

    event MessageSent(address indexed from, address indexed to, string message);

    // function sendMessage(address to, string memory message) public {
    //     messageCount++;
    //     messages[messageCount] = Message(msg.sender, to, message);

    //     emit MessageSent(to, msg.sender, message);
    // }

    // function getMessage(uint256 id) public view returns (Message memory) {
    //     return messages[id];
    // }
} 