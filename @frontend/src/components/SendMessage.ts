import React from 'react'
import { ethers } from "ethers";

import MessengerArtifact from "../contracts/Messenger.json";
import contractAddress from "../contracts/contract-address.json";

export function SendMessage({ provider }: any) {

    const contract = new ethers.Contract(
        contractAddress.Messenger,
        MessengerArtifact.abi,
        provider.getSigner(0)
    )

    return (
        <>
            <a onClick={async () => {
                console.log("NAME => ", await contract.name())
            }}>Get Name</a>
        </>
    )
}