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

// Executing several promises on the same time
const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log('getting stuff from youtube');
    resolve({ videos: ['1', '2', '3', '4'] });
  }, 5000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log('getting stuff from facebook');
    resolve({ user: 'Name' });
  }, 2000);
});

Promise.all([yt, fb]).then((result) => {
  console.log(result);
});
