import { useAccount, useContractEvent } from "wagmi"
import contractAddress from '../contracts/contract-address.json'
import Application from '../contracts/Application.json'
import { useEffect, useState } from "react"
import useMessage from "../hooks/useMessage"

const MessageInbox = () => {
    const { address } = useAccount()
    // const [] = useState()
    const { data } = useMessage(1);

    useEffect(() => {
        console.log("=>>",data)
    }, [])

    const addMessage = (messageId: number) => {
        console.log("ADD=>>", messageId)
    }

    useContractEvent({
        address: contractAddress.Application as any,
        abi: Application.abi,
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
