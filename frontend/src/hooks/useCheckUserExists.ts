import { Address, useAccount, useContractRead } from "wagmi"
import { contractAddress, Messenger } from "../contracts"
import { useState } from "react"

export const useCheckUserExists = (address: Address) => {
    // const [userExists, setUserExists] = useState(false)

    const { data, isSuccess } = useContractRead({
        address: contractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'checkUserExists',
        args: [address]
    })

    if (isSuccess) {
        return 1
    }

    return 0
}