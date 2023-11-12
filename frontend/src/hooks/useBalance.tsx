import { useContext, useEffect, useState } from "react"
import { AppStateContext } from ".."
import { ethers } from "ethers"

const useBalance = () => {
    const { provider, signer } = useContext(AppStateContext)
    const [balance, setBalance] = useState('')

    const fetchBalance = async () => {
        const weiBalance = await provider.getBalance(signer.value)
        const ethBalance = ethers.formatEther(weiBalance)
        setBalance(ethBalance)
    }

    useEffect(() => {
        setInterval(() => {
            fetchBalance()
        }, 250)
    }, [])

    return balance
}

export default useBalance
