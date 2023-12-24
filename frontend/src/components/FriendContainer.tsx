import { Avatar, Badge, Box, Flex, HStack, Heading, Stack, Text, Tooltip, VStack, Wrap, WrapItem } from "@chakra-ui/react"

type FriendProps = {
    address: string
    username: string
}

const Friend = ({ address, username }: FriendProps) => {
    const trimAddress = `${address.slice(0, 4)}...${address.slice(address.length - 4, address.length)}`
    const avatar = 'https://gravatar.com/avatar/f4d9db35e1e572337e8ae864fdfe118e?s=400&d=robohash&r=x'

    return (
        <Box borderBottomWidth='1px' minWidth='fit-content'>
            <HStack>
                <Avatar src={avatar} />
                <VStack padding='2' >
                    <Heading fontSize='20px'>
                        {username}
                    </Heading>
                    <Tooltip label={address} placement='top' hasArrow>
                        <Badge colorScheme='blue' fontSize='x-small'>
                            {trimAddress}
                        </Badge>
                    </Tooltip>
                </VStack>
            </HStack>
        </Box>
    )
}

const FriendContainer = () => {
    return (
        <>
            <Heading fontSize='30px'>Friends</Heading>
            <Box borderWidth='1px' borderRadius='10px'>
                <Wrap direction='column' spacing='10px'>
                    <WrapItem>
                        <Friend
                            address='0x1383061f183A0756d9739F50a86A6D4125d02C0b'
                            username='Mandiz' />
                    </WrapItem>
                    <WrapItem>
                        <Friend
                            address='0x1383061f183A0756d9739F50a86A6D4125d02C0b'
                            username='Mandiz' />
                    </WrapItem>
                    <WrapItem>
                        <Friend
                            address='0x1383061f183A0756d9739F50a86A6D4125d02C0b'
                            username='Mandiz' />
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    )
}

export default FriendContainer
