import { useAccount } from 'wagmi'

import { Connect } from './components/Connect'
import MessageInbox from './components/MessageInbox'
import SendMessage from './components/SendMessage'

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
