// @ts-nocheck
import { useState } from "react"
import { useContractWrite } from "wagmi"
import { Messenger, contractAddress } from "../contracts"

const SendInvite = () => {
    const [address, setAddress] = useState('')

    const { write, data, isLoading, isSuccess, status } = useContractWrite({
        address: contractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'addFriend',
        args: [address]
    })

    if (isLoading) {
        return (
            <>
                LOADING...
            </>
        )
    }

    return (
        <>
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <button onClick={() => write?.()}>Add friend</button>
            { isSuccess && (
                <>
                    Friend has been added!
                </>
            ) }
        </>
    )
}

const FriendList = () => {
    return (
        <>
            <SendInvite />
        </>
    )
}

export default FriendList