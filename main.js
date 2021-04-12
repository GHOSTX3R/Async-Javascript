function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
      resolve(videos[0]);
    }, 1000);
  });
}

console.log('Start');

// callback hell
login('email@gomail.com', 12345, (email) => {
  console.log(email);
  getUserVideos(email, (videos) => {
    console.log(videos);
    getVideoDetails(videos, (video) => {
      console.log(video + ' is awesome');
    });
  });
});

console.log('Finish');
