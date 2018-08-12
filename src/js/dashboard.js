const btnLogin = document.getElementById('init-button');
const logIn = document.getElementById('logIn');
const table = document.getElementById('table');
const close = document.getElementById('close');
const exit = document.getElementById('logOut');

btnLogin.addEventListener('click', event => {
  let admin = document.getElementById('user-admin').value;
  let password = parseInt(document.getElementById('admin-password').value);
  if (admin === 'user' && password === 1234) {
    logIn.style.display = 'none';
    table.style.display = 'block';
    close.style.display = 'block';
    console.log('si pasa');
    } else {
    alert('Datos incorrectos');
  }
});

exit.addEventListener('click', (event) => {
  if (confirm('¿Estás segur@ que quieres salir?')) {
    window.location.reload();
  };
});
