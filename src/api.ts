const data = {
  id: '5',
  email: 'danner@email.com',
  password: '123456',
  name: 'danner',
  balance: 2000.0,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
