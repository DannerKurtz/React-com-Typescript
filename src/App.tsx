import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Conta } from './pages/Conta';
import { InfoConta } from './pages/InfoConta';

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route
                path='/'
                element={<Card />}
              />
              <Route
                path='/conta/:id'
                element={<Conta />}
              />
              <Route
                path='/infoconta'
                element={<InfoConta />}
              />
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
