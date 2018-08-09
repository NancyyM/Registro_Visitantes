// Get button from welcome page
const initButton = document.getElementById('init-button');

// Adding a listener for initButton
initButton.addEventListener('click', () => {
  window.location.assign('../src/views/register.html');
});
