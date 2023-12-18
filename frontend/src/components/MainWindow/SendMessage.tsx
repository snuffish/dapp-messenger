import { MessageInput } from "@minchat/react-chat-ui"
import Messenger from '../../contracts/Messenger.json'
import ContractAddress from '../../contracts/contract-address.json'

import { useAccount, useContractWrite } from "wagmi"
import { friendKey } from '.'
import { useEffect, useState } from "react"

// function sendMessage(address to, string memory _msg) external {

const SendMessage = () => {
    const { address } = useAccount()
    const [message, setMessage] = useState('')

    const { write, isLoading, error } = useContractWrite({
        address: ContractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'sendMessage',
        args: [friendKey.value, message]
    })

    const onSubmit = () => {
        write()
    }

    if (error) {
        return (
            <>
                FEL!
            </>
        )
    }

    return (
        <MessageInput
            themeColor='#6ea9d7'
            onKeyUp={(e) => setMessage(e.currentTarget.textContent as string)}
            onSendMessage={onSubmit}
        ></MessageInput>
    )
}

export default SendMessage
