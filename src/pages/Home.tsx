import { Button, Input, Text } from '@chakra-ui/react';
import { Card } from '../components/Card';
import { login } from '../services/login';
import { useState } from 'react';

export const Home = () => {
  const [email, setEmail] = useState(''); // Estado inicial vazio
  const [password, setPassword] = useState('');

  const entrar = () => {
    login(email, password);
  };
  return (
    <>
      <Card>
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
        <Input
          placeholder='password'
          marginTop='10px'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          variant='solid'
          width={'100%'}
          marginTop={'10px'}
          onClick={entrar}
        >
          Entrar
        </Button>
      </Card>
    </>
  );
};
