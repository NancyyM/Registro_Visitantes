// Get a reference to the database service
var database = firebase.database();
console.log(database);

// Constant to save URL of companies json file
const json = 'https://raw.githubusercontent.com/Anavzqz/Registro_Visitantes/rama-Ana/data/data.json';

// Function to get companies json
const getData = () => {
  console.log('hola');
  fetch(json)
    .then(response => response.json())
    .then((res) => {
      console.log(res);
    });
  getInputs();
};

const getInputs = () => {
  // Get user inputs
  const inputName = document.getElementById('input-name');
  const inputEmail = document.getElementById('input-email');
  const inputCompany = document.getElementById('input-company');
  const inputHost = document.getElementById('input-visited');
  const buttonLogIn = document.getElementById('log-in');

  initRegister(inputName.value, inputEmail.value, inputCompany.value, inputHost.value);
};


const getDataUser = () => {
  console.log('hola1');
};

const validateDataUser = () => {
  console.log('hola');
};



window.onload = getData;
