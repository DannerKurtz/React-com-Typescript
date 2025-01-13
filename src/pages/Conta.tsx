import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { CardInfo } from '../components/CardInfo';
import { useEffect, useState } from 'react';
import { api } from '../api';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<any | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  });

  const actualData = new Date();

  return (
    <Center>
      <SimpleGrid
        columns={2}
        spacing={8}
        paddingTop={16}
      >
        {userData === undefined || userData === null ? (
          <Spinner
            size={'xl'}
            color='white'
          />
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualData.getDate()} / ${
                actualData.getMonth() + 1
              } - ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo
              mainContent='Saldo da Conta'
              content={`R$: ${userData?.balance}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
