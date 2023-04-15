// ********** MODE SOMBRE ********** //
let containerLightNight = document.querySelector('.containerLightNight');

containerLightNight.addEventListener('click', function(){
    let body = document.querySelector('body');
    body.classList.toggle("body--darkMode");
});