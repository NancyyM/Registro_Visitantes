// Get body from splash
const body = document.getElementById('splash');

// Print DOM for splash page
body.innerHTML = `  <main class="container text-center centered-view">
<div class="row">
  <section>
  <div class="progress">
    <div class="determinate c"></div>
  </div>
  <div class="block1 active"> 1 </div>
  <div class="block2 active"> 2 </div>
  <div class="block3"> 3 </div>
  <div class="block4"> 4 </div>
  </section>
  </div>
<div class="row">
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


// window.onload = getDataVisitor();
nextButtonSplash.addEventListener('click', () => {
  window.location.assign('../views/player.html');
});
