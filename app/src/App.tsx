import './css/index.css'
import { Box, Button, Center, ChakraProvider, Flex, Grid, GridItem, Image, Input, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import FriendContainer from 'components/FriendContainer'
import HeaderContainer from 'components/HeaderContainer'
import ChatContainer from 'components/ChatContainer'
import { useRef, useState } from 'react'

type MessageProps = {
  me: boolean
  message: string
}

const Message = ({ me, message }: MessageProps) => {
  let bgColor = me ? '#2566EE' : '#0E0E0E'
  const flexDirection = me ? 'row-reverse' : 'row'

  return (
    <Flex direction={flexDirection}>
        <Image
          borderRadius='full'
          boxSize='50px'
          src='http://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Kurt&hatColor=Red&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=PastelYellow&eyeType=Wink&eyebrowType=UpDown&mouthType=Smile&skinColor=Brown'
          alt='Dan Abramov'
        />
        <Box
          borderWidth={1}
          minWidth={150}
          borderRadius={10}
          backgroundColor={bgColor}
          textColor='white'
          padding={1}
        >
          <Text>
            { message }
          </Text>
        </Box>
      </Flex>
  )
}

const SendMessage = () => {
  const messageInputRef = useRef(null) 
  const [message, setMessage] = useState('')
  const [isError, setError] = useState(false)

  const submitMessage = () => {
    if (message === '') {
      setError(true)
      return
    }
    setError(false)

    console.log('MESSAGE => ', message)

    setMessage('')
  }

  return (
    <>
      <Flex direction='row' margin={2}>
        <Input
          placeholder='Type a message...'
          value={message}
          ref={messageInputRef}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              submitMessage()
            }
          }}
          isInvalid={isError}
        />
        <Button
          // isLoading
          colorScheme='blue'
          onClick={submitMessage}
        >Send</Button>
      </Flex>
    </>
  )
}

const ChatComponent = () => {
  return (
    <>
      <Message
        me={true}
        message='Hejsan, hur är läget? sadsa  dklsah jkdhsajk dsa da dlksa a dsa dsa  dsa dsa dsa dsa'
      />
      <Message
        me={false}
        message='Bara bra tack! :)'
      />
      <SendMessage/>
    </>
  )
}

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Center>
        <Box width='500px' borderWidth={1}>
          <ChatComponent />
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
