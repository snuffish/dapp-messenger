//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "hardhat/console.sol";

struct Message {
    address from;
    string text;
}

contract Messenger {
    address private owner;

    modifier onlyOwner {
        require(msg.sender == owner, 'caller must be owner');
        _;
    }

    event MessageSent(address indexed _from, address indexed _to);

    mapping(address => Message[]) public messages;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() external view returns(address) {
        return owner;
    }

    function sendMessage(address _to, string memory _text) external {        
        Message memory newMessage = Message(msg.sender, _text);
        messages[_to].push(newMessage);

        emit MessageSent(msg.sender, _to);
    }

    function getMessages() public view returns(Message[] memory) {
        return messages[msg.sender];
    }

    function destroy() external onlyOwner {
        selfdestruct(payable(owner));
    }
}
