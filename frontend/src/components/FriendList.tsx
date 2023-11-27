import { Message, Sidebar } from "@minchat/react-chat-ui"
import { Box, Container } from "@mui/material"
import styled from 'styled-components'

const FriendList = () => {
    const LeftTemplate = (args: any) => <Message
        {...args}
        user={{
            "id": "danny_1",
            "name": "Daniel Georgetown",
            avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        }}
        themeColor='#6ea9d7'
        type="incoming"
        text="Hello World!"
    />

    const RightTemplate = (args: any) => <Message
        {...args}
        user={{
            "id": "danny_1",
            "name": "Daniel Georgetown",
            avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
        }}
        themeColor='#6ea9d7'
        type="outgoing"
        text="Hello World!"
    />

    return (
        <>
            <LeftTemplate />
            <RightTemplate />
        </>
    )
}

export default FriendList