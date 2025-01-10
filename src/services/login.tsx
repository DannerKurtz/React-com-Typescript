import { api } from '../api';

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const login = async (email: string, password: string) => {
  const data: UserData | any = await api;

  if (email === data.email && password === data.password) {
    alert(`Seja Bem Vindo ${data.name}`);
  } else {
    alert(`Entrada não autorizada`);
  }
};
