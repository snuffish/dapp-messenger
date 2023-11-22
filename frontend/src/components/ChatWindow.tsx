import { Button, TextField } from '@mui/material'

const ChatWindow = () => {
    return (
        <>
            <TextField
                multiline={true}
                placeholder='Message...'
            />
            <br/>
            <Button variant='contained'>Send</Button>
        </>
    )
}

export default ChatWindow