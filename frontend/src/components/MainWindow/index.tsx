import { Address, useAccount, useContractRead } from "wagmi"
import { useCheckUserExists } from "../../hooks/useCheckUserExists"
import { Connected } from "../Connected"
import { useEffect, useState } from "react"
import { Messenger, contractAddress } from "../../contracts"

const Account = () => {
    const [username, setUsername] = useState('')

    const { data, isSuccess } = useContractRead({
        address: contractAddress.MessengerAddress as Address,
        abi: Messenger.abi,
        functionName: 'getUsername'
    })

    if (isSuccess) {
        console.log("TTT=>>>",data)
    }


    return (
        <>
            Username: {username}
        </>
    )
}

const MainWindow = () => {
    return (
        <Connected>
            <Account/>
        </Connected>
    )
}

export default MainWindow

