import { Message } from "@minchat/react-chat-ui";

type Props = {
    text: string
    me?: boolean
}

const MessageBox = ({ text, me = true }: Props) => {
    return (
        <Message
            user={{
                id: "danny_1",
                name: "Daniel Georgetown",
                avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            }}
            themeColor='#6ea9d7'
            type={me ? 'incoming' : 'outgoing'}
            showAvatar={true}
            single={true}
            text={text}
            last={true}
        />
    )
}

export default MessageBox
