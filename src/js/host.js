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
const json = 'https://raw.githubusercontent.com/CitlalliDMG/Registro_Visitantes/rama-registro/data/data.json';

// Function to get companies json
const getDataCompanies = () => {
  fetch(json)
    .then(response => response.json())
    .then((res) => {
      // const companies = getCompaniesNames(res);
      const employees = getCompaniesEmployees(res);
      // console.log(employees);
      printSelects(employees);
    });
};

const templateEmployees = (filteredEmployees) => {
  console.log(filteredEmployees);
  // document.getElementById('employees-list').innerHTML = '';
  let containerEmployees = document.getElementById('employees-list');
  let template = '';
  filteredEmployees.forEach((employee) => {
    template += `<div class="item-employee">
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
  console.log(template);
  console.log(containerEmployees);

  containerEmployees.innerHTML = template;
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

window.onload = () => {
  getDataVisitor();
  getDataCompanies();
};
