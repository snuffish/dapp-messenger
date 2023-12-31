import { useContractRead } from "wagmi"
import { contractAddress, Messenger } from "../contracts"
import { useState } from "react"

export const userGetUser = () => {
    // const [username, setUsername] = useState('')

    const { data: username, isSuccess } = useContractRead({
        address: contractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'getUsername'
    })


    // if (isSuccess) {
    //     setUsername(data as string)
    // }

    return { username }
}