import { useAccount, useContractEvent } from "wagmi"
import contractAddress from '../contracts/contract-address.json'
import Messenger from '../contracts/Messenger.json'
import { useState } from "react"

const MessageInbox = () => {
    const { address } = useAccount()
    const [] = useState()

    const addMessage = (messageId: number) => {
        console.log("ADD=>>", messageId)
    }

    useContractEvent({
        address: contractAddress.Messenger as any,
        abi: Messenger.abi,
        eventName: 'MessageSent',
        listener: (log) => {
            log.filter(({ args }: any) => args.to == address || args.from == address)
                .map(({ args }: any) => addMessage(args.messageId))
        }
    })

    return (
        <>
            INBOX
        </>
    )
}

export default MessageInbox
