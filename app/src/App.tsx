import './css/index.css'
import { Box, Center, ChakraProvider } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import ChatComponent from './components/Chat'

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Center>
        <Box width='500px' borderWidth={1}>
          <ChatComponent
            username='Mandiz'
          />
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
