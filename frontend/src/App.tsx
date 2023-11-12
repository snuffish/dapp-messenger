import { ethers } from 'ethers';
import './App.css';
import ConnectWallet from './components/ConnectWallet';
import { useContext } from 'react';
import { AppStateContext } from '.';
import Chat from './components/Chat';

function App() {
  const { signer } = useContext(AppStateContext)

  console.log("ADDR",ethers.getAddress('0x9cFB7df745c81da84489E1D7f2408989159f6990'))

  return (
    <div className="App">
      <body>
        <div className="App-Container">
          {signer.value.address && <Chat/>}
          {!signer.value.address && <ConnectWallet/>}
        </div>
      </body>
    </div>
  );
}

export default App;
