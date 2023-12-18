// @ts-nocheck
import { Message, Sidebar } from "@minchat/react-chat-ui"
import { Box, Container } from "@mui/material"
import styled from 'styled-components'
import { useAccount, useContractRead, useContractWrite } from "wagmi"
import { Messenger, contractAddress } from "../contracts"
import { useCheckUserExists } from "../hooks/useCheckUserExists"
import { useState } from "react"
import { useFriendList } from "../hooks/useFriendList"

const FriendItem = () => {
    return <>
        DDDD
    </>
}

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
    // const { userExists } = useCheckUserExists()

    // if (!userExists) {
    //     return (
    //         <>
    //             You have no account
    //         </>
    //     )
    // }

    // const { done, friends } = useFriendList()

    // if (done) {
    //     console.log(friends)
    // }
    return (
        <>
            <SendInvite />
        </>
    )

    


    // const LeftTemplate = (args: any) => <Message
    //     {...args}
    //     user={{
    //         "id": "danny_1",
    //         "name": "Daniel Georgetown",
    //         avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    //     }}
    //     themeColor='#6ea9d7'
    //     type="incoming"
    //     text="Hello World!"
    // />

    // const RightTemplate = (args: any) => <Message
    //     {...args}
    //     user={{
    //         "id": "danny_1",
    //         "name": "Daniel Georgetown",
    //         avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    //     }}
    //     themeColor='#6ea9d7'
    //     type="outgoing"
    //     text="Hello World!"
    // />

    // return (
    //     <>
    //         <LeftTemplate />
    //         <RightTemplate />
    //     </>
    // )
}

export default FriendList