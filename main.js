function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now we have the data');
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3', 'video4']);
    }, 2000);
  });
}

function getVideoDetails(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 1000);
  });
}

console.log('Start');

// callback hell
// login('email@gomail.com', 12345, (email) => {
//   console.log(email);
//   getUserVideos(email, (videos) => {
//     console.log(videos);
//     getVideoDetails(videos, (video) => {
//       console.log(video + ' is awesome');
//     });
//   });
// });

// login('email@gmail.com', '123456')
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => getVideoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// Sync style
// const user = login('email', 'password');
// const videos = userDetails(user.email);

async function displayUser() {
  try {
    const logingUser = await login('email', 'password');
    const videos = await getUserVideos(logingUser.userEmail);
    const detail = await getVideoDetails(videos[0]);
  } catch (err) {
    console.log(err);
  }

  console.log(detail);
}

displayUser();

console.log('Finish');
