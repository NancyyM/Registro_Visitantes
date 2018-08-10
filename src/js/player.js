  let player = document.getElementById('player'); 
  let snapshotCanvas = document.getElementById('snapshot');
  let captureButton = document.getElementById('capture');
  let videoTracks;

  let handleSuccess = (stream) => {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
    videoTracks = stream.getVideoTracks();
  };

  captureButton.addEventListener('click', () => {
  let context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width, 
        snapshotCanvas.height);

  let imageDataURL = snapshotCanvas.toDataURL();

  // Create a root reference
  let storageRef = firebase.storage().ref();
  let images = storageRef.child('Images');

  images.putString(imageDataURL, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
  });

        // Stop all video streams.
    videoTracks.forEach(function(track) {track.stop()});
  });

  //Detiene la camara cuando se toma la foto
  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);

let next = document.getElementById('next-button-player');

next.addEventListener('click', () => {
  window.location.assign('../src/');
});
