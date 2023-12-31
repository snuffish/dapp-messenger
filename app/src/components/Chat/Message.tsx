import { Flex, Image, Box, Text, Avatar, AvatarBadge } from "@chakra-ui/react"


type Props = {
    me: boolean
    message: string
}
const MessageComponent = ({ me, message }: Props) => {
    let bgColor = me ? '#2566EE' : '#0E0E0E'
    const flexDirection = me ? 'row-reverse' : 'row'
    const avatarImage = me ? 'http://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Kurt&hatColor=Red&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=PastelYellow&eyeType=Wink&eyebrowType=UpDown&mouthType=Smile&skinColor=Brown' : 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'

    return (
        <Flex
            className='message'
            direction={flexDirection}
        >
            <Avatar src={avatarImage}/>
            <Box
                className='text'
                borderWidth={1}
                minWidth={150}
                borderRadius={10}
                backgroundColor={bgColor}
                textColor='white'
                padding={1}
            >
                <Text>
                    {message}
                </Text>
            </Box>
        </Flex>
    )
}

export default MessageComponent
