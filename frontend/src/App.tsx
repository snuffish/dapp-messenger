import { useAccount } from 'wagmi'

import { Account } from './components/@backup/Account'
import { Balance } from './components/@backup/Balance'
import { BlockNumber } from './components/@backup/BlockNumber'
import { Connect } from './components/Connect'
import { NetworkSwitcher } from './components/@backup/NetworkSwitcher'
import { ReadContract } from './components/@backup/ReadContract'
import { ReadContracts } from './components/@backup/ReadContracts'
import { ReadContractsInfinite } from './components/@backup/ReadContractsInfinite'
import { SendTransaction } from './components/@backup/SendTransaction'
import { SendTransactionPrepared } from './components/@backup/SendTransactionPrepared'
import { SignMessage } from './components/@backup/SignMessage'
import { SignTypedData } from './components/@backup/SignTypedData'
import { Token } from './components/@backup/Token'
import { WatchContractEvents } from './components/@backup/WatchContractEvents'
import { WatchPendingTransactions } from './components/@backup/WatchPendingTransactions'
import { WriteContract } from './components/@backup/WriteContract'
import { WriteContractPrepared } from './components/@backup/WriteContractPrepared'
import SendMessage from './components/SendMessage'
import MessageInbox from './components/MessageInbox'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>Messenger</h1>

      <Connect />
      <br/>

      {isConnected && (
        <>
          <SendMessage/>
          <br/><br/><br/><br/>
          <MessageInbox/>
        </>
      )}
    </>
  )
}
