// login.test.ts
import { login } from './login';

const dataMock = {
  email: 'danner@email.com',
  password: '123456',
  name: 'danner',
};

describe('Login Function', () => {
  it('should call alert with "Bem vindo!"', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await login(dataMock.email, dataMock.password);

    expect(alertMock).toHaveBeenCalledWith(`Seja Bem Vindo ${dataMock.name}`);
    alertMock.mockRestore();
  });
  it('should call alert with Entrada não autorizada', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await login('test@exemple.com', '123');

    expect(alertMock).toHaveBeenCalledWith(`Entrada não autorizada`);
    alertMock.mockRestore();
  });
});
