//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

struct User {
    string name;
    Friend[] friends;
}

struct Friend {
    address pubkey;
    string name;
}

struct Message {
    address sender;
    uint256 timestamp;
    string message;
}

contract Messenger is Ownable {
    event MessageSent(address indexed from, address indexed to);

    mapping(address => User) private users;
    mapping(bytes32 => Message[]) private userMessages;

    constructor() Ownable(msg.sender) { }

    function sendMessage(address to, string memory _msg) external {

        Message memory message = Message(msg.sender, block.timestamp, _msg);
        bytes32 chatCode = _getChatCode(msg.sender, to);

        userMessages[chatCode].push(message);
       
        emit MessageSent(msg.sender, to);
    }

    function checkUserExists(address pubkey) public view returns (bool exists) {
        return bytes(users[pubkey].name).length > 0;
    }

    function getMessages(address friendKey) external view returns (Message[] memory messages) {
        //bytes32 chatCode = _getChatCode(0x9cFB7df745c81da84489E1D7f2408989159f6990, friendKey);
        bytes32 chatCode = _getChatCode(msg.sender, friendKey);

        return userMessages[chatCode];
    }

    // Returns a unique code for the channel created between the two users
    // Hash(key1,key2) where key1 is lexicographically smaller than key2
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns (bytes32 chatCode) {
        return keccak256(pubkey1 < pubkey2 ? abi.encodePacked(pubkey1, pubkey2) : abi.encodePacked(pubkey2, pubkey1));
    }
}
