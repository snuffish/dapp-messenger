import { useState } from "react"
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"
import { contractAddress, Messenger } from "../../contracts"

export const CreateAccount = () => {
    const [username, setUsername] = useState('')

    // const { config, error, isLoading, data } = usePrepareContractWrite({
    //     address: contractAddress.MessengerAddress as any,
    //     abi: Messenger.abi,
    //     functionName: 'createAccount',
    //     args: [username]
    // })
    const { write, data: tx } = useContractWrite({
        address: contractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'createAccount',
        args: [username]
    })

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: tx as any
    })

    if (isSuccess) {
        return (
            <>
                CREATED!!!
            </>
        )
    }

    if (isLoading) {
        return (
            <>
                LOADING...
            </>
        )
    }

    

    console.log("DATA => ", tx)

    return (
        <>
            { isSuccess ? (
                <>
                    User Created!
                </>
            ) : (
                <>
                    <h2>Create account</h2>
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <br/>
                    <button onClick={() => write?.()}>Create</button>
                </>
            )}
        </>
    )
}