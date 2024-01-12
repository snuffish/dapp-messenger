// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

struct MessageStruct {
    bytes32 data;
}

interface IMessage {
    function sender() external pure returns(bytes32);
    function getMessage() external pure returns(bytes32);
}