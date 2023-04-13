// ********** MODE SOMBRE ********** //
let containerLightNight             = document.querySelector('.containerLightNight');

containerLightNight.addEventListener('click', function(){
    // DECLARATION DES VARIABLES
    let body                        = document.querySelector('body');
    let containerLightNightIcon     = document.querySelector('.containerLightNight__icon');
    let authorName                  = document.querySelector('.author__name');
    let authorJob                   = document.querySelector('.author__job');
    let presentationText            = document.querySelector('.presentation__text');
    let contactText                 = document.querySelector('.contact__text');
    let skillsContainerPicture       = document.getElementsByClassName('skills__container__picture');

    //AJOUT EFFETS CSS
    containerLightNight.classList.toggle("containerLightNight--darkMode");
    body.classList.toggle("body--darkMode");
    containerLightNightIcon.classList.toggle("containerLightNight__icon--darkMode");
    authorName.classList.toggle("author__name--darkMode");
    authorJob.classList.toggle("author__job--darkMode");
    presentationText.classList.toggle("presentation__text--darkMode");
    contactText.classList.toggle("contact__text--darkMode");

    for (let index = 0; index < skillsContainerPicture.length; index++) {
        skillsContainerPicture[index].classList.toggle("skills__container__picture--darkMode");
    }
    
});