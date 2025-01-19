import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Conta } from './pages/Conta';
import { InfoConta } from './pages/InfoConta';
import { createContext } from 'react';

interface IAppContext {
  user: string;
}

export const AppContext = createContext({} as IAppContext);

function App() {
  const AppContextProvider = ({ children }: any) => {
    const user = 'dan';

    return (
      <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>
    );
  };

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
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
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
