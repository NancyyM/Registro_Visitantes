const btnLogin = document.getElementById('init-button');
const logIn = document.getElementById('logIn');
const tableContainer = document.getElementById('table-container');
const close = document.getElementById('close');
const buttonCloseRow = document.getElementById('button-row');
const exit = document.getElementById('logOut');
const initView = document.getElementById('initial-view');
let refVisitor;

btnLogin.addEventListener('click', event => {
  let admin = document.getElementById('user-admin').value;
  let password = parseInt(document.getElementById('admin-password').value);
  if (admin === 'user' && password === 1234) {
    initView.classList.add('hide');
    table.style.display = 'block';
    tableContainer.classList.remove('hide');
    buttonCloseRow.classList.remove('hide');
    init();
  } else {
    swal({
      type: 'error',
      title: 'Error',
      text: 'Datos incorrectos'
    });
  }
});

exit.addEventListener('click', (event) => {
  swal({
    title: '¿Estás segur@ que quieres salir?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#231F20',
    cancelButtonColor: '#F8BB86',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      window.location.reload();
    }
  });
});

const getTimeToDate = (time) => {
  let timeToDate = new Date(time);
  let day = timeToDate.getDate();
  let month = timeToDate.getMonth() + 1;
  let year = timeToDate.getFullYear();
  if (day < 10) {
    day = '0' + day;
  };

  if (month < 10) {
    month = '0' + month;
  };

  timeToDate = `${day}/${month}/${year}`;
  return timeToDate;
};

const getTimeToHour = (time) => {
  let currentTime = new Date(time);
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = '0' + minutes;
  };
  let timeToHour = `${hours} : ${minutes}`;
  return timeToHour;
};

const getUrl = (url) => {
  return url;
};

const createNewVisitorElement = (date, visitor, hostCompany, hostName, status, photoUrl) => {
  let visitorsTable = document.getElementById('visitors-table');
  const time = date;
  let timeToDate = getTimeToDate(time);
  let timeToHour = getTimeToHour(time);
  let visitorPhoto = photoUrl;

  let row = visitorsTable.insertRow(0);
  let cellVisitorPhoto = row.insertCell(0);
  let cellVisitorName = row.insertCell(1);
  let cellHostName = row.insertCell(2);
  let cellHostCompany = row.insertCell(3);
  let cellIn = row.insertCell(4);
  let cellDate = row.insertCell(5);
  let cellStatus = row.insertCell(6);

  cellVisitorPhoto.innerHTML = `<img src="${visitorPhoto}" class="avatar">`;
  cellVisitorName.innerHTML = `${visitor}`;
  cellHostName.innerHTML = `${hostName}`;
  cellHostCompany.innerHTML = `${hostCompany}`;
  cellIn.innerHTML = `${timeToHour}`;
  cellDate.innerHTML = `${timeToDate}`;
  cellStatus.innerHTML = `${status}`;
};

const addVisitor = (key, visitorCollection) => {
  let photoRef = firebase.storage().ref(`visitorPhotos/${key}`);
  photoRef.getDownloadURL().then((url) => {
    let photoUrl = url;
    createNewVisitorElement(visitorCollection.date, visitorCollection.visitor, visitorCollection.host.hostCompany, visitorCollection.host.hostName, visitorCollection.status, photoUrl);
  });
};

const getVisitorOfFirebase = () => {
  refVisitor.on('value', (snapshot) => {
    let visitorsTable = document.getElementById('visitors-table');
    const dataVisitor = snapshot.val();
    for (let key in dataVisitor) {
      addVisitor(key, dataVisitor[key]);
    }
  });
};

const init = () => {
  refVisitor = firebase.database().ref().child('visitors');
  getVisitorOfFirebase();
};
