import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Conta } from './pages/Conta';
import { InfoConta } from './pages/InfoConta';
import { AppContextProvider } from './components/AppContext';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <Routes>
                <Route
                  path='/'
                  element={<Home />}
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
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
