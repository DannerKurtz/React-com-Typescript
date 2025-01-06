import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        teste com o children
        <div>
          <h1>Login Dio Bank</h1>
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
