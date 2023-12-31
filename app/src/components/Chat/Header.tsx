import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, Box, Divider, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react"

type Props = {
    username: string
}
const ChatHeaderComponent = ({ username }: Props) => {
    return (
        <Box>
            <Flex width='100%'>
                <Avatar src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>

                <Flex flexDirection='column' mx='5' justify='center'>
                    <Text fontSize='x-large' fontWeight='bold'>
                        {username}
                    </Text>
                    <Text color="green.500">Online</Text>
                </Flex>

                <Spacer />

                <Box margin={2}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem icon={<CloseIcon />}>
                                Close
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Divider
                variant='solid'
                borderBottomWidth='3px'
            />
        </Box>
    )
}


export default ChatHeaderComponent