import { useEffect, useState } from "react"
import { useContractRead, useContractWrite } from "wagmi"
import contractAddress from '../contracts/contract-address.json'
import Messenger from '../contracts/Messenger.json'

const SendMessage = () => {
    const [address, setAddress] = useState('0xb3cC6D3996f5bB8AeE6b0D0c756c18Eb2C788Df9')
    const [message, setMessage] = useState('Testar lite')

    const { write, data, isIdle, isLoading, isSuccess } = useContractWrite({
        address: contractAddress.Messenger as any,
        abi: Messenger.abi,
        functionName: 'sendMessage'
    })

    // const { data, status, error, refetch } = useContractRead({
    //     address: contractAddress.Messenger as any,
    //     abi: Messenger.abi,
    //     functionName: 'getOwner'
    // })

    const onSubmit = () => {
        // write({ args: [address, message]  })
    }

    return (
        <>
            <input type="text" placeholder="Send to" onChange={e => setAddress(e.target.value)} value={address}/><br/>
            <input type="text" placeholder="Message" onChange={e => setMessage(e.target.value)} value={message}/><br/>
            <button onClick={onSubmit}>
                {isIdle && 'Send'}
                {isLoading && 'Sending...'}
                {isSuccess && 'Message sent!'}
            </button>
        </>
    )
}

export default SendMessage
