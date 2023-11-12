import { ethers } from 'ethers'
import { Button } from '@mui/material';
import { useContext } from 'react';
import { AppStateContext } from '..';

const ConnectWallet = () => {
    const { signer } = useContext(AppStateContext)

    const onConnectWallet = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum)
        signer.value = await provider.getSigner(0)
    }

    return (
        <>
            <Button variant='contained' onClick={onConnectWallet}>Connect Wallet</Button>
        </>
    )
}

export default ConnectWallet
