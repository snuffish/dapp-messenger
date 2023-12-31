import '../../css/chat.css'
import { Button, Divider, Flex, Input } from "@chakra-ui/react"
import Message from "./Message"
import Header from './Header'
import { useRef, useState } from "react"

const SendMessage = () => {
    const messageInputRef = useRef(null)
    const [message, setMessage] = useState('')
    const [isError, setError] = useState(false)

    const submitMessage = () => {
        if (message === '') {
            setError(true)
            return
        }
        setError(false)

        setMessage('')
    }

    return (
        <>
            <Flex direction='row' margin={2}>
                <Input
                    placeholder='Type a message...'
                    value={message}
                    ref={messageInputRef}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            submitMessage()
                        }
                    }}
                    isInvalid={isError}
                />
                <Button
                    // isLoading
                    colorScheme='blue'
                    onClick={submitMessage}
                >Send</Button>
            </Flex>
        </>
    )
}

type Props = {
    username: string
}
const ChatComponent = ({ username }: Props) => {
    return (
        <>
            <Header
                username={username}
            />
            <Divider
                variant='solid'
                borderBottomWidth='3px'
            />
            <Message
                me={true}
                message='Hejsan, hur är läget? sadsa  dklsah jkdhsajk dsa da dlksa a dsa dsa  dsa dsa dsa dsa'
            />
            <Message
                me={false}
                message='Bara bra tack! :)'
            />
            <Message
                me={true}
                message='Fan vad bra då, en jävlans massa text för att kolla om responsiva radbrytningar fungerar för text.'
            />
            <SendMessage />
        </>
    )
}

export default ChatComponent
