const data = {
  email: 'danner@email.com',
  password: '123456',
  name: 'danner',
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
