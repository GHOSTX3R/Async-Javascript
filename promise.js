const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ username: 'user' });
    reject(new Error('something goes wrong'));
  }, 3000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });
