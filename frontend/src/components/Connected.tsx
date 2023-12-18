import { useAccount } from "wagmi"

export const Connected = ({ children }: any) => {
    const { isConnected } = useAccount()

    return isConnected ? { ...children } : <b>No Connection!</b>
}