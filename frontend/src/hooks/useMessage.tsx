import { useContext, useEffect, useState } from "react"
import { AppStateContext } from ".."
import { ethers } from "ethers"
import contractAddress from '../contracts/contract-address.json'
import MessengerArtifact from '../contracts/Messenger.json'

const useMessage = () => {
    const { signer } = useContext(AppStateContext)
    const [isSendingPending, setSendingPending] = useState(false)
    const [messages, setMessages] = useState('')

    const contract = new ethers.Contract(
        contractAddress.Messenger,
        MessengerArtifact.abi,
        signer.value
    )

    const fetchMessages = async () => {
        const data = await contract.getMessages()
        setMessages(data)
    }

    useEffect(() => {
        setInterval(() => fetchMessages(), 250)
    }, [])

    const sendMessage = async (to: string, message: string) => {
        setSendingPending(true)
        try {
            const call = await contract.sendMessage(to, message)
            const tx = await call.wait()
        } catch (err) { }
        setSendingPending(false)
    }

    return { sendMessage, isSendingPending, messages }
}

export default useMessage
