//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

struct User {
    string username;
    Friend[] friends;
}

struct Friend {
    address pubkey;
    string username;
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

    function createAccount(string memory username) external {
        require(!checkUserExists(msg.sender), "User already exists!");
        require(bytes(username).length > 0, "Username cannot be empty!");
        users[msg.sender].username = username;
    }

    function addFriend(address friend_key) external {
        require(checkUserExists(msg.sender), "User doesnt exists!");
        require(checkUserExists(friend_key), "Friend pubkey doesnt exist!");
        require(msg.sender != friend_key, "Users cannot add themselves as friends!");

        _addFriend(friend_key);
    }

    function _addFriend(address friend_key) internal {
        string memory name = users[friend_key].username;
        Friend memory friend = Friend(friend_key, name);
        
        users[msg.sender].friends.push(friend);
    }

    function getFriends() external view returns (Friend[] memory friends) {
        return users[msg.sender].friends;
    }

    function sendMessage(address friend_key, string memory _msg) external {

        Message memory message = Message(msg.sender, block.timestamp, _msg);
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);

        userMessages[chatCode].push(message);
       
        emit MessageSent(msg.sender, friend_key);
    }

    function checkUserExists(address pubkey) public view returns (bool exists) {
        return bytes(users[pubkey].username).length > 0;
    }

    function getUsername() public view returns (string memory username) {
        return users[msg.sender].username;
    }

    function getMessages(address friendKey) external view returns (Message[] memory messages) {
        bytes32 chatCode = _getChatCode(msg.sender, friendKey);

        return userMessages[chatCode];
    }

    // Returns a unique code for the channel created between the two users
    // Hash(key1,key2) where key1 is lexicographically smaller than key2
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns (bytes32 chatCode) {
        return keccak256(pubkey1 < pubkey2 ? abi.encodePacked(pubkey1, pubkey2) : abi.encodePacked(pubkey2, pubkey1));
    }
}
