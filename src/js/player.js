let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;

let handleSuccess = function (stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function () {
  let context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);

  // Stop all video streams.
  videoTracks.forEach(function (track) { track.stop() });
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);

let imageDataURL = hidden_canvas.toDataURL('image/png');
// Set the dataURL as source of an image element, showing the captured photo.
image.setAttribute('src', imageDataURL);
