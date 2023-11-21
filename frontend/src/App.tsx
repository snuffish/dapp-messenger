import { useAccount } from 'wagmi'

import { Connect } from './components/Connect'
import MessageInbox from './components/MessageInbox'
import SendMessage from './components/SendMessage'
import FriendList from './components/FriendList'
import Layout from './Layout'

export function App() {
  const { isConnected } = useAccount()

  return (
    <Layout>
      <h1>Messenger</h1>
    </Layout>
  )
}
