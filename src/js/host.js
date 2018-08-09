// Get a reference to the database service
let database = firebase.database();

// Function to get data from localstorage
const getDataVisitor = () => {
  let visitorName = sessionStorage.getItem('visitorName');
  let visitorLastName = sessionStorage.getItem('visitorLastName');
  let visitorFullName = `${visitorName} ${visitorLastName}`;
  console.log(visitorFullName);
  return visitorFullName;
};

// GET DATA FROM COMPANIES
// Constant to save URL of companies json file
const json = 'https://raw.githubusercontent.com/Anavzqz/Registro_Visitantes/rama-Ana/data/data.json';

// Function to get companies json
const getDataCompanies = () => {
  fetch(json)
    .then(response => response.json())
    .then((res) => {
      // const companies = getCompaniesNames(res);
      const employees = getCompaniesEmployees(res);
      // printSelects(companies, employees);
    });
};

const loadForm = (dataCompanies) => {
  console.log(dataCompanies);
};

window.onload = () => {
  getDataVisitor();
  getDataCompanies();
};
