import { Box } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Header } from './Header/Header';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box backgroundColor={'purple'}>{children}</Box>
      <Footer />
    </>
  );
};
