import { Box, Button, Flex } from '@chakra-ui/react';
import './Header.css';
import { Card } from '../Card';
import { useState } from 'react';

export const Header = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true); // Exibe o componente
  };

  const handleClose = () => {
    setShowComponent(false); // Fecha o componente
  };

  return (
    <Box
      width={'100%'}
      backgroundColor={'#00004F'}
      height={'10vh'}
    >
      <Flex
        gap={'4'}
        justifyContent={'space-between'}
        padding={'20px'}
      >
        <Flex
          color={'#FFF'}
          fontSize={'5vh'}
          justifyContent={'center'}
        >
          <h1>Dio Bank</h1>
        </Flex>

        <Flex>
          <Button onClick={handleClick}>Entrar</Button>
        </Flex>
      </Flex>

      {/* Exibe o Card somente se showComponent for true */}
      {showComponent && <Card onClose={handleClose} />}
    </Box>
  );
};
