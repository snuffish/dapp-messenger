import { useContractEvent } from "wagmi"
import contractAddress from '../contracts/contract-address.json'
import Messenger from '../contracts/Messenger.json'

const MessageInbox = () => {

    useContractEvent({
        address: contractAddress.Messenger as any,
        abi: Messenger.abi,
        eventName: 'MessageSent',
        listener: (log) => {
            console.log("EVENT RECEIVED =>", log)
        }
    })

    return (
        <>
            XXX
        </>
    )
}

export default MessageInbox