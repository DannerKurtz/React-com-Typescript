import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Card />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
