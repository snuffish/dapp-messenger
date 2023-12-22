import { useState } from "react"
import { Address, useAccount, useContractRead } from "wagmi"
import { Messenger, contractAddress } from "../../contracts"
import { Connected } from "../Connected"

const Account = () => {
    const { data: username, isSuccess } = useContractRead({
        address: contractAddress.MessengerAddress as Address,
        abi: Messenger.abi,
        functionName: 'getUsername'
    })

    if (isSuccess) {
        console.log("TTT=>>>",username)
    }


    return (
        <>
            Username: {username}
        </>
    )
}

const AccountExists = ({ children }: any) => {
    // const { address } = useAccount()
    // const { data: userExists, isSuccess } = useContractRead({
    //     address: contractAddress.MessengerAddress as Address,
    //     abi: Messenger.abi,
    //     functionName: 'checkUserExists',
    //     args: [address]
    // })

    // if (isSuccess) {
    //     console.log("EXIST=>>",userExists)
    // }

    return (
        { ...children }
    )
}

const MainWindow = () => {
    return (
        <Connected>
            <AccountExists>
                <Account/>
            </AccountExists>
        </Connected>
    )
}

export default MainWindow

