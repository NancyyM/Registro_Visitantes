const btnLogin = document.getElementById('init-button');
const logIn = document.getElementById('logIn');
const table = document.getElementById('table');
const close = document.getElementById('close');
const exit = document.getElementById('logOut');
const initView = document.getElementById('initial-view');
let refVisitor;

btnLogin.addEventListener('click', event => {
  let admin = document.getElementById('user-admin').value;
  let password = parseInt(document.getElementById('admin-password').value);
  if (admin === 'user' && password === 1234) {
    // logIn.classList.add('hide');
    initView.classList.add('hide');
    table.style.display = 'block';
    close.classList.remove('hide');
    close.style.display = 'block';
    init();
  } else {
    swal({
      type: 'error',
      title: 'Error',
      text: 'Datos incorrectos'});
  }
});

exit.addEventListener('click', (event) => {
  if (confirm('¿Estás segur@ que quieres salir?')) {
    window.location.reload();
  };
});

const getTimeToDate = (time) => {
  let timeToDate = new Date(time);
  let day = timeToDate.getDate();
  let month = timeToDate.getMonth() + 1;
  let year = timeToDate.getFullYear();
  if (day < 10) {
    day = '0'+ day;
  };

  if (month < 10) {
    month = '0'+ month;
  };

  timeToDate = `${day} / ${month} / ${year}`;
  return timeToDate;
};

const createNewVisitorElement = (date, visitor, hostCompany, hostName, status) => {
  let visitorsTable = document.getElementById('visitors-table');
  const time = date;
  let timeToDate = getTimeToDate(time);

  let row = visitorsTable.insertRow(1);
  let cellVisitorPhoto = row.insertCell(0);
  let cellVisitorName = row.insertCell(1);
  let cellHostName = row.insertCell(2);
  let cellHostCompany = row.insertCell(3);
  let cellIn = row.insertCell(4);
  let cellOut = row.insertCell(5);
  let cellDate = row.insertCell(6);
  let cellStatus = row.insertCell(7);

  cellVisitorName.innerHTML = `${visitor}`;
  cellHostName.innerHTML = `${hostName}`;
  cellHostCompany.innerHTML = `${hostCompany}`;
  cellIn.innerHTML = '-';
  cellOut.innerHTML = '-';
  cellDate.innerHTML = `${timeToDate}`;
  cellStatus.innerHTML = `${status}`;
};

const addVisitor = (key, visitorCollection) => {
  const visitorItem = createNewVisitorElement(visitorCollection.date, visitorCollection.visitor, visitorCollection.host.hostCompany, visitorCollection.host.hostName, visitorCollection.status);
  // listItem.setAttribute('data-keypost', key);
  // postList.insertBefore(listItem, postList.childNodes[0]);
  // bindPostEvents(listItem);
};

const getVisitorOfFirebase = () => {
  refVisitor.on('value', (snapshot) => {
    let visitorsTable = document.getElementById('visitors-table');
    // visitorTable.innerHTML = '';
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
