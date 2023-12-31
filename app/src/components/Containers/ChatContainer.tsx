import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const SendMessageForm = () => {
    return (
        <>
            <InputGroup>
                <Input
                type='text'
                placeholder='Type a message...'/>
                <InputRightElement>
                    <Button colorScheme='teal' variant='solid' padding='20px'>
                        Send
                    </Button>
                </InputRightElement>
            </InputGroup>
        </>
    )
}

const ChatContainer = () => {
    return (
        <>
            <SendMessageForm/>
        </>
    )
}

export default ChatContainer
