// Function to get data from localstorage
const getDataVisitor = () => {
  let visitorName = localStorage.getItem('visitorName');
  let visitorLastName = localStorage.getItem('visitorLastName');
  let visitorFullName = `${visitorName} ${visitorLastName}`;
  console.log(visitorFullName);
  return visitorFullName;
};

// Get body from splash
const body = document.getElementById('splash');

// Print DOM for splash page
body.innerHTML = `  <main class="container text-center">
<div class="row middle">
  <div class="col-2 vertical-center">
    <button type="button" class="btn btn-default btn-circle btn-xl" id="return-button-splash">
      <i class="fas fa-chevron-left"></i>
    </button>
  </div>
  <div class="col-8">
    <h1>Preparate para tomarte una foto</h1>
    <img src="https://dummyimage.com/300x300&text=ejemplo foto" alt="logo_coworking" id="logo-coworking">
  </div>
  <div class="col-2 vertical-center">
    <button type="button" class="btn btn-default btn-circle btn-xl" id="next-button-splash">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</div>
</main>`;

// Get buttons from splash
const returnButtonSplash = document.getElementById('return-button-splash');
const nextButtonSplash = document.getElementById('next-button-splash');

returnButtonSplash.addEventListener('click', () => {
  window.location.assign('../views/register.html');
});


window.onload = getDataVisitor();
nextButtonSplash.addEventListener('click', () => {
  window.location.assign('../views/player.html');
})
