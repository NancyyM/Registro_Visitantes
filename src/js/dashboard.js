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

const createNewVisitorElement = (date, visitor, hostCompany, hostName, status) => {
  console.log(date, visitor, hostCompany, hostName, status);
  let visitorsTable = document.getElementById('visitors-table');
  const time = date;
  const timeToDate = new Date(time).toDateString();
  // let table = document.getElementById("myTable");
  let row = visitorsTable.insertRow(1);
  let cellVisitorName = row.insertCell(0);
  let cellHostName = row.insertCell(1);
  let cellHostCompany = row.insertCell(2);
  let cellIn = row.insertCell(3);
  let cellOut = row.insertCell(4);
  let cellDate = row.insertCell(5);
  let cellStatus = row.insertCell(6);

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
      console.log(dataVisitor[key]);
      addVisitor(key, dataVisitor[key]);
    }
  });
};

const init = () => {
  refVisitor = firebase.database().ref().child('visitors');
  getVisitorOfFirebase();
};
