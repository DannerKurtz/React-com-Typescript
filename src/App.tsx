import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Box
          minHeight={'100vh'}
          backgroundColor={'#9413dc'}
          padding={'25vh'}
        >
          <Flex
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              bg={'#FFFFFF'}
              borderRadius={'25px'}
              padding={'15px'}
            >
              <Text
                fontWeight='semibold'
                textAlign={'center'}
                margin={'10px'}
              >
                Login Dio Bank
              </Text>
              <Input placeholder='email' />
              <Input placeholder='password' />

              <Button
                variant='surface'
                width={'100%'}
                marginTop={'10px'}
              >
                Entrar
              </Button>
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
