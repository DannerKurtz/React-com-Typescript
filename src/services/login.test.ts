// login.test.ts
import { login } from './login';

describe('Login Function', () => {
  it('should call alert with "Bem vindo!"', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    login();

    expect(alertMock).toHaveBeenCalledWith('Bem vindo!');
    alertMock.mockRestore();
  });
});
