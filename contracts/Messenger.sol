//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "hardhat/console.sol";

struct Message {
    address from;
    string text;
}

contract Messenger {
    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner, 'caller must be owner');
        _;
    }

    event MessageSent(address indexed from, address indexed to, uint messageId);

    uint private messageId = 0;
    mapping(uint => Message) public messages;

    constructor() {
        owner = msg.sender;
    }

    function sendMessage(address _to, string memory _text) external {
        messageId++;
        Message memory newMessage = Message(msg.sender, _text);
        messages[messageId] = newMessage;

        emit MessageSent(msg.sender, _to, messageId);
    }

    function getMessages(uint messageId) public view returns(Message memory) {
        return messages[messageId];
    }

    function destroy() external onlyOwner {
        selfdestruct(payable(owner));
    }
}
