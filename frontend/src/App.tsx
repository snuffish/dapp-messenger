import { Box, ChakraProvider, Grid, GridItem, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import FriendContainer from './components/FriendContainer'
import HeaderContainer from './components/HeaderContainer'
import ChatContainer from './components/ChatContainer'

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Text>
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
      </Text>
    </ChakraProvider>
  )
}
