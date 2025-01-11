import { Box, Flex } from '@chakra-ui/react';
import './Header.css';

export const Header = () => {
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
      </Flex>
    </Box>
  );
};
