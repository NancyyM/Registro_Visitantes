// Get a reference to the storage service, which is used to create references in your storage bucket
let storage = firebase.storage();

let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;

let handleSuccess = (stream) => {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

const takePhoto = () => {
  let context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);

  let imageDataURL = snapshotCanvas.toDataURL();
  snapshotCanvas.classList.remove('hide');
  player.classList.add('hide');
  document.getElementById('next-button-player').classList.remove('hide');

  // Create a root reference
  let storageRef = storage.ref('/visitorPhotos/');
  console.log(storageRef);
  const newVisitorKey = firebase.database().ref().child('visitors').push().key;

  let images = storageRef.child(newVisitorKey);
  sessionStorage.setItem('visitorKey', newVisitorKey);

  images.putString(imageDataURL, 'data_url').then((snapshot) => {
    console.log('Uploaded a data_url string!');
  });

  // Stop all video streams.
  videoTracks.forEach((track) => {
    track.stop();
  });

  captureButton.classList.remove('take-photo');
  captureButton.innerHTML = 'Tomar otra';
  captureButton.classList.add('retake-photo');
};

captureButton.addEventListener('click', () => {
  if (captureButton.classList.contains('take-photo')) {
    takePhoto();
  } else if (captureButton.classList.contains('retake-photo')) {
    location.reload();
  }
});

// Detiene la camara cuando se toma la foto
navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);

let next = document.getElementById('next-button-player');
let returnButton = document.getElementById('return-button-player');

next.addEventListener('click', () => {
  window.location.assign('../views/host.html');
});

returnButton.addEventListener('click', () => {
  window.location.assign('../views/splash.html');
});
