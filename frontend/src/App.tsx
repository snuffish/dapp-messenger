import { Box, ChakraProvider, Grid, GridItem, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'

export function App() {
  const { isConnected } = useAccount()

  return (
    <ChakraProvider>
      <Text>
        <Box textAlign='center' fontSize='x-large'>
          <Grid
            gap={4}>
            <GridItem colSpan={8}>
              <Text>Header</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text>LeftGridItem</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Text>ChatGirdItem</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text>RightGridItem</Text>
            </GridItem>
          </Grid>
        </Box>
      </Text>
    </ChakraProvider>
  )
}
