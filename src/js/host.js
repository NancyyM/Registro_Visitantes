// Get a reference to the database service
let database = firebase.database();

// Function to get data from localstorage
const getDataVisitor = () => {
  let visitorName = sessionStorage.getItem('visitorName');
  let visitorLastName = sessionStorage.getItem('visitorLastName');
  let visitorFullName = `${visitorName} ${visitorLastName}`;
  // console.log(visitorFullName);
  return visitorFullName;
};

// GET DATA FROM COMPANIES
// Constant to save URL of companies json file
const json = 'https://raw.githubusercontent.com/CitlalliDMG/Registro_Visitantes/rama-registro/data/data.json';

// Function to get companies json
const getDataCompanies = () => {
  fetch(json)
    .then(response => response.json())
    .then((res) => {
      const employees = getCompaniesEmployees(res);
      printSelects(employees);
    });
};

const templateEmployees = (filteredEmployees) => {
  let containerEmployees = document.getElementById('employees-list');
  let template = '';
  filteredEmployees.forEach((employee) => {
    template += `<div class="item-employee>
    <div class="offset-2 col-8">
        <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <h5>${employee.name}</h5>
                        <p>${employee.companie}</p>
                    </div>
                </div>
            </div>
        </div>
 </div>`;
  });
  containerEmployees.innerHTML = template;
  getDataForHost();
};

const printSelects = (dataEmployees) => {
  console.log(dataEmployees);
  const search = document.getElementById('input-host-name');
  search.addEventListener('keyup', () => {
    if (search.value.trim().length > 0) {
      const nameToSearch = search.value.toUpperCase();
      const filteredEmployees = dataEmployees.filter((employee) => {
        return employee.name.toUpperCase().indexOf(nameToSearch) >= 0;
      });
      templateEmployees(filteredEmployees);
    }
  });
};

const getDataForHost = () => {
  let elementos = document.getElementsByClassName('card-stacked');
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', cardSelected);
  };
};

const cardSelected = (event) => {
  let selectedCard = event.currentTarget.parentNode;
  let hostName = selectedCard.querySelector('h5').innerText;
  let hostCompany = selectedCard.querySelector('p').innerText;
  document.getElementById('input-host-name').value = hostName;

  clearList();
};

const clearList = () => {
  document.querySelector('section').innerHTML = '';
};

document.getElementById('return-button-host').addEventListener('click', () => {
  window.location.assign('../views/player.html');
});

window.onload = () => {
  getDataVisitor();
  getDataCompanies();
};
