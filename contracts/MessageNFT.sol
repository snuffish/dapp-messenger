//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { IMessage, MessageStruct } from "./IMessage.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract MessageNFT is IMessage, Ownable {
    constructor() Ownable(msg.sender) {}

    MessageStruct private message;

    function getMessage() external pure override returns (bytes32) {
        return keccak256("DSDS");
    }

    function sender() external pure override returns (bytes32) {
        return keccak256("SENDER_ADDRA");
    }
}
