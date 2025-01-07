// login.test.ts
import { login } from './login';

describe('Login Function', () => {
  it('should call alert with "Bem vindo!"', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    login('a@a.com');

    expect(alertMock).toHaveBeenCalledWith('Seja bem-vindo a@a.com');
    alertMock.mockRestore();
  });
});
