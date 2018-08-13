// Get a reference to the database service
let database = firebase.database();

// Function to get data from localstorage
const getDataVisitor = () => {
  let visitorName = sessionStorage.getItem('visitorName');
  let visitorLastName = sessionStorage.getItem('visitorLastName');
  let visitorFullName = `${visitorName} ${visitorLastName}`;
  return visitorFullName;
};

// GET DATA FROM COMPANIES
// Constant to save URL of companies json file
const json = 'https://raw.githubusercontent.com/CitlalliDMG/Registro_Visitantes/master/data/data.json';

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
        <div class="card horizontal" data-email="${employee.email}">
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
  let hostEmail = selectedCard.dataset.email;

  document.getElementById('input-host-name').value = hostName;

  sessionStorage.setItem('hostName', hostName);
  sessionStorage.setItem('hostCompany', hostCompany);
  sessionStorage.setItem('hostEmail', hostEmail);

  activateButton();
  clearList();
};

const activateButton = (hostName) => {
  if (hostName !== '') {
    document.getElementById('next-button-host').classList.remove('hide');
  } else {
    document.getElementById('next-button-host').classList.add('hide');
  }
};

const clearList = () => {
  document.querySelector('section').innerHTML = '';
};

document.getElementById('return-button-host').addEventListener('click', () => {
  window.location.assign('../views/player.html');
});

document.getElementById('next-button-host').addEventListener('click', () => {
  let hostName = document.getElementById('input-host-name').value.trim();
  if (hostName !== null && hostName !== '' && hostName.length > 3) {
    let visitorObject = createVisitorObject();
    sendVisitorInfoToFirebase(visitorObject);
    document.getElementById('host-body').innerHTML = '';
    swal(
      'Gracias',
      `${visitorObject.host.hostName} ha sido notificado de tu llegada.
      Por favor espera en el área de recepción`,
      'success'
    ).then((result) => {
      if (result.value) {
        sessionStorage.clear();
        window.location.assign('../index.html');
      }
    });
  } else {
    swal({
      text: 'Por favor ingresa a quien visitas'
    });
  };
});

const sendVisitorInfoToFirebase = (visitorObject) => {
  // console.log(visitorObject);
  // Create a unique key for visitors collection
  const newVisitorKey = sessionStorage.getItem('visitorKey');
  // Get the date and hour of register
  const date = (new Date).getTime();
  // Add property date to visitor object
  visitorObject.date = date;
  console.log(visitorObject);
  // Set the data for each visitor registered
  firebase.database().ref(`visitors/${newVisitorKey}`).set(visitorObject);
  // sendEmail();
};

// const sendEmail = () => {
//   const sgMail = require(['@sendgrid/mail']);
//   sgMail.setApiKey(process.env.sengrid.env);
//   const msg = {
//     to: 'citlallidmg@gmail.com',
//     from: 'test@example.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail.send(msg);
// };

const createVisitorObject = () => {
  let visitorInfo = {
    'visitor': getDataVisitor(),
    'host': getDataHost(),
    'status:': 'pendiente'
  };
  return visitorInfo;
};

const getDataHost = () => {
  let hostName = sessionStorage.getItem('hostName');
  let hostCompany = sessionStorage.getItem('hostCompany');
  let hostEmail = sessionStorage.getItem('hostEmail');
  let hostInfo = {
    'hostName': hostName,
    'hostCompany': hostCompany,
    'hostEmail': hostEmail
  };
  return hostInfo;
};

window.onload = () => {
  getDataCompanies();
};
