import { Button, Grid, TextField } from "@mui/material";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import MessengerArtifact from '../contracts/Messenger.json';
import contractAddress from '../contracts/contract-address.json';
import { AppStateContext } from "..";
import { computed } from "@preact/signals-react";
import { Label } from "@mui/icons-material";
import useBalance from "../hooks/useBalance";
import useMessage from "../hooks/useMessage";

const Chat = () => {
    const { signer, address } = useContext(AppStateContext)
    const balance = useBalance()
    const { messages, sendMessage, isSendingPending } = useMessage()

    const [sendToAddress, setSendToAddress] = useState('0x5BDf39348A9201CFa967707191eF4149a1E83040')
    const [message, setMessage] = useState('Test132')

    const onSubmit = async () => {
        sendMessage(sendToAddress, message)
    }

    return (
        <>
            <div style={{
                color: 'red'
            }}>ADDRESS: {address}</div>
            <div style={{
                color: 'green'
            }}>BALANCE: {balance?.toString()}</div>
            <div style={{
                color: 'green'
            }}>MSG COUNT: {messages.length}</div>
            <Grid container rowSpacing={1} columnSpacing={3} direction='column'>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Send to address"
                        sx={{
                            width: '500px'
                        }}
                        onChange={e => setSendToAddress(e.target.value)}
                        defaultValue={sendToAddress}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        multiline
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Placeholder"
                        sx={{
                            width: '500px',
                        }}
                        onChange={e => setMessage(e.target.value)}
                        defaultValue={message}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' onClick={onSubmit}>
                        {isSendingPending ? 'LOADING...' : 'Send'}
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Chat