import {useAccount} from "wagmi";
import { Connected } from "./Connected";

const Account = () => {
    const { address } = useAccount()

    return (
        <Connected>
            <span>Connected with wallet {address}</span>
        </Connected>
    )
}

export default Account
