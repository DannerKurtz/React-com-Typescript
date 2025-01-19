import { Box } from '@chakra-ui/react';

export const Card = ({ children }: any) => {
  return (
    <Box
      top='0'
      left='0'
      width='100%'
      height='90vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      zIndex='1000' 
    >
      <Box
        bg={'#FFFFFF'}
        borderRadius={'25px'}
        padding={'15px'}
        width='300px'
      >
        {children}
      </Box>
    </Box>
  );
};
