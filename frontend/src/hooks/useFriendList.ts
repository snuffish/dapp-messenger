import { useAccount, useContractRead, usePrepareContractWrite } from "wagmi"
import { Messenger, contractAddress } from "../contracts"
import { friendKey } from "../components/MainWindow"

export const useFriendList = () => {
    const { data: friends, isLoading: isLoadingFriends, isSuccess } = usePrepareContractWrite({
        address: contractAddress.MessengerAddress as any,
        abi: Messenger.abi,
        functionName: 'getFriends'
    })

    const done = isSuccess

    return { friends, done }
}