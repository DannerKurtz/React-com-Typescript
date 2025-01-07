import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { login } from './services/login';

function App() {
  const [email, setEmail] = useState(''); // Estado inicial vazio

  const handleLogin = () => {
    console.log('Email:', email); // Debug para verificar o valor do email
    login(email); // Chama a função login com o email
  };

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
              <Input
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
              />
              <Input placeholder='password' />

              <Button
                variant='surface'
                width={'100%'}
                marginTop={'10px'}
                onClick={handleLogin} // Callback para o evento
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
