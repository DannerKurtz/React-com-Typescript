import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { login } from '../services/login';
import { useEffect, useState } from 'react';
import { api } from '../api';

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = ({ onClose }: any) => {
  const [email, setEmail] = useState(''); // Estado inicial vazio
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email); // Debug para verificar o valor do email
    login(email, password); // Chama a função login com o email
    onClose(); // Fecha o Card após o login
  };

  const [userData, setUserData] = useState<any | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  });

  return (
    <Box
      position='fixed'
      top='0'
      left='0'
      width='100%'
      height='100vh'
      backgroundColor='rgba(0, 0, 0, 0.5)' // Fundo escuro semitransparente
      display='flex'
      justifyContent='center'
      alignItems='center'
      zIndex='1000' // Coloca o Card acima de outros elementos
    >
      {userData === null || (userData === undefined && <h1>LOADING...</h1>)}
      <Box
        bg={'#FFFFFF'}
        borderRadius={'25px'}
        padding={'15px'}
        width='300px'
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
          onClick={handleLogin} // Callback para o evento
        >
          Entrar
        </Button>

        <Button
          variant='ghost'
          width={'100%'}
          marginTop={'10px'}
          onClick={onClose} // Fecha o Card
        >
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};
