import './css/index.css'
import { Box, Button, Center, ChakraProvider, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import ChatComponent from './components/Chat'

const Login = () => {
  const { isConnected, connector, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { connect, connectors, isLoading } = useConnect()

  const connectorId = connectors.filter(x => x.ready && x.id !== connector?.id).pop()

  if (!isConnected) {
    return (
      <VStack
        spacing={5}
      >
        <HStack>
          <Image
            src='https://cdn-icons-png.flaticon.com/512/5910/5910054.png'
            boxSize='100px'
          />
          <Heading>Chain Messenger</Heading>
        </HStack>
        <Text
          textAlign='center'
          maxWidth='80%'
        >
          Secure Messaging between peer-to-peer users using Decentralized Blockchain Technology.
        </Text>
        <Text>Just <b>Connect</b> with your wallet below to begin the madness!</Text>
        <Button
          onClick={() => connect({ connector: connectorId })}
          isLoading={isLoading}
          bgColor='blue.300'
          maxWidth='100px'
        >
          Connect
        </Button>
      </VStack>
    )
  }

  return (
    <>
      Address: {address}<br />
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </>
  )
}

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Center>
        <Box
          className='appContainer'
          borderWidth={1}
          borderRadius={5}
        >
          <Login />
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
