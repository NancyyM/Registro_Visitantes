// Get body from splash
const body = document.getElementById('splash');

// Print DOM for splash page
body.innerHTML = `<header class="text-center head-card align-middle background-grey">
<h1> Fotografía </h1>
</header>
<main class="container text-center">
<section class="row">
<div class="container">
  <ul class="progressbar">
    <li class="active-step"></li>
    <li class="active-step"></li>
    <li></li>
    <li></li>
  </ul>
</div>
</section>
<div class="row middle">
  <div class="col-2 vertical-center">
    <button type="button" class="btn btn-default btn-circle btn-xl background-grey" id="return-button-splash">
      <i class="fas fa-chevron-left"></i>
    </button>
  </div>
  <div class="col-8">
    <h1>Preparate para tomarte una foto</h1>
  </div>
  <div class="col-2 vertical-center">
    <button type="button" class="btn btn-default btn-circle btn-xl background-grey" id="next-button-splash">
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
