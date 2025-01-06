import { Layout } from './components/Layout';
import styled from 'styled-components';

const Box = styled.div`
  background-color: orange;
  border-radius: 15px;
  text-align: center;
`;

function App() {
  return (
    <>
      <Layout>
        teste com o children
        <div>
          <Box>
            <h1>Login Dio Bank</h1>
          </Box>
          <label htmlFor='emailInput'>Email</label>
          <input
            id='emailInput'
            type='email'
          />
          <label htmlFor='passwordInput'>Password</label>
          <input
            id='passwordInput'
            type='password'
          />

          <button>Entrar</button>
        </div>
      </Layout>
    </>
  );
}

export default App;
