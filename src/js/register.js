// Get inputs from register page
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');

// Get buttons from register page
const returnButton = document.getElementById('return-button');
const nextButton = document.getElementById('next-button');

// Create objet for visitor data
const visitorData = {};

// Add listener to buttons
returnButton.addEventListener('click', () => {
  window.location.assign('../index.html');
});

nextButton.addEventListener('click', () => {
  console.log('holi');
});

// Listen to visitor name
inputName.addEventListener('keyup', () => {
  visitorName = inputName.value.trim();
  if (visitorName != '') {
    inputLastName.removeAttribute('disabled');
    visitorData.name = visitorName;
    // console.log(visitorData);
    listenInputLastName(visitorData);
  };
});

// Listen to visitor last name
const listenInputLastName = (visitorData) => {
  inputLastName.addEventListener('keyup', () => {
    visitorLastName = inputLastName.value.trim();
    if (visitorLastName != '') {
      visitorData.lastname = visitorLastName;
      nextButton.classList.remove('disabled');
      console.log(visitorData);
    };
  });
};
