import { useContractRead } from "wagmi"
import contractAddress from '../contracts/contract-address.json'
import Application from '../contracts/Application.json'
import { useEffect } from "react"

 const useMessage = (messageId: number): any => {
    
    const { data, isLoading } = useContractRead({
        address: contractAddress.Application as any,
        abi: Application.abi,
        functionName: 'getMessage',
        args: [messageId]
    })

    useEffect(() => {
        console.log("OIDWJADSA",data)
    }, [data])

    return { data: 'ds' }
 }
 
 export default useMessage
