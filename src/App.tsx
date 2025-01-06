import { Layout } from './components/Layout';
import { ChakraProvider, Flex, Input } from '@chakra-ui/react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: orange;
  border-radius: 15px;
  text-align: center;
`;

function App() {
  return (
    <>
      <ChakraProvider>
        <Flex direction={'column'}>
          <h1>Login Dio Bank</h1>
          <Flex
            direction={'column'}
            justify={'center'}
          >
            <Input placeholder='email' />
            <Input placeholder='password' />
          </Flex>
        </Flex>

        <button>Entrar</button>
      </ChakraProvider>
    </>
  );
}

export default App;
