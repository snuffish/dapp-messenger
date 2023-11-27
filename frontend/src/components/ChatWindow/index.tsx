import { Container } from "@mui/material";
import MessageBox from "./MessageBox";
import SendMessage from "./SendMessage";
import { signal } from "@preact/signals-react";

export const friendKey = signal('0x5BDf39348A9201CFa967707191eF4149a1E83040')

const ChatWindow = () => {
    return (
        <>
            <Container>
                <MessageBox
                text="Testar lite"
                />
                <SendMessage/>
            </Container>
        </>
    )
}

export default ChatWindow
