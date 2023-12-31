import './css/index.css'
import { Box, Button, Center, ChakraProvider } from '@chakra-ui/react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import ChatComponent from './components/Chat'

const Login = () => {
  const { isConnected, connector, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { connect, connectors, isLoading } = useConnect()

  const connectorId = connectors.filter(x => x.ready && x.id !== connector?.id).pop()
  
  console.log("CONN => ", connectors)

  if (!isConnected) {
    return (
      <>
        <Button onClick={() => connect({ connector: connectorId })}>
          {/* {isLoading ? } */}
        </Button>
      </>
    )
  }

  if (isConnected) {
    return (
      <>
        Address: {address}<br/>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </>
    )
  }
}

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Center>
        <Box width='500px' borderWidth={1}>
          <Login/>
          {/* <ChatComponent
            username='Lisa'
          /> */}
        </Box>
      </Center>

      {/* <Text>
        <Box textAlign='center' fontSize='x-large'>
          <Grid
            gap={4}>
            <GridItem colSpan={8}>
              <HeaderContainer/>
            </GridItem>
            <GridItem colSpan={2}>
              <FriendContainer/>
            </GridItem>
            <GridItem colSpan={6}>
              <ChatContainer/>
            </GridItem>
          </Grid>
        </Box>
      </Text> */}
    </ChakraProvider>
  )
}
