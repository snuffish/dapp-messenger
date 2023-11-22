import { useAccount } from "wagmi"

const Account = () => {
    const { isConnected, address } = useAccount()

    if (isConnected) {
        return (
            <>Connected with wallet {address}</>
        )
    }

    return (
        <b>
            No connection
        </b>
    )
}

export default Account