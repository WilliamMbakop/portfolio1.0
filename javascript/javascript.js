// ********** MODE SOMBRE ********** //
let containerLightNight = document.querySelector('.containerLightNight');

containerLightNight.addEventListener('click', function(){
    let body = document.querySelector('body');
    body.classList.toggle("body--darkMode");
});

// ********** CHANGEMENT DU TITLE ********** //
let navbarItems = document.querySelectorAll('.navbar__items');
let title = document.querySelector('title');

for (const navbarItem of navbarItems) {

    switch (navbarItem.textContent) {
        case 'Présentation':
            navbarItem.addEventListener('click',function(){
                title.textContent='Présentation';
            })            
            break;
        case 'Technologies':
            navbarItem.addEventListener('click',function(){
                title.textContent='Technologies';
            })            
            break;
         case 'Projets':
            navbarItem.addEventListener('click',function(){
                title.textContent='Projets';
            })            
            break;
         case 'Contact':
            navbarItem.addEventListener('click',function(){
                title.textContent='Contact';
            })            
            break;        
    
        default:
            navbarItem.addEventListener('click',function(){
                title.textContent='Portfolio William Mbakop';
            })            
            break;
    }
}

// ********** ANIMATION PHOTO PROFIL ********** //

let presentationPicture = document.querySelector('.presentation__picture');

presentationPicture.addEventListener('mouseenter', function(){

    if(presentationPicture.src == "https://williammbakop.github.io/portfolio/images/photo_profil.jpg"){
        presentationPicture.src="https://williammbakop.github.io/portfolio/images/picture-logo.png";        
    }else{
        presentationPicture.src="https://williammbakop.github.io/portfolio/images/photo_profil.jpg";
    }
});

