// Get inputs from register page
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');

// Get buttons from register page
const returnButton = document.getElementById('return-button');
const nextButton = document.getElementById('next-button');

// Create objet for visitor data
const visitorData = {};

// Listen to visitor name
inputName.addEventListener('keyup', () => {
  visitorName = inputName.value.trim().toUpperCase();
  inputName.value = visitorName;
  if (visitorName != '') {
    inputLastName.removeAttribute('disabled');
    visitorData.name = visitorName;
    // let nameAndLastName = listenInputLastName(visitorData);
    uploadVisitorName(visitorData.name);
  };
});

// Add listener to buttons
returnButton.addEventListener('click', () => {
  window.location.assign('../index.html');
});

nextButton.addEventListener('click', () => {
  if (nextButton.classList.contains('disabled')) {
    alert('Llena correctamente todos los campos');
  } else {
    inputName.innerHTML = '';
    inputLastName.innerHTML = '';
    window.location.assign('../views/splash.html');
  }
});

// Listen to visitor last name
inputLastName.addEventListener('keyup', () => {
  visitorLastName = inputLastName.value.toUpperCase().trim();
  inputLastName.value = inputLastName.value.toUpperCase();
  if (visitorLastName != '') {
    visitorData.lastname = visitorLastName;
    nextButton.classList.remove('disabled');
    uploadVisitorLastName(visitorLastName);
  };
});

const uploadVisitorName = (visitorName) => {
  sessionStorage.setItem('visitorName', visitorName);
};

const uploadVisitorLastName = (visitorLatName) => {
  sessionStorage.setItem('visitorLastName', visitorLastName);
};

window.onload = () => {
  inputName.value = '';
  inputLastName.value = '';
};
