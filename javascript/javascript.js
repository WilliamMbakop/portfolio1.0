// ********** MODE SOMBRE/CLAIR ********** //
//! Mise en place du mode sombre/clair  :
const containerLightNight = document.querySelector(".containerLightNight");

containerLightNight.addEventListener("click", function () {
  const body = document.querySelector("body");
  const containerLightNight = document.querySelector(".containerLightNight");
  const formNewsletter = document.querySelector(".formNewsletter");
  const firstScreen = document.querySelector(".firstScreen");
  body.classList.toggle("body--darkMode");
  containerLightNight.classList.toggle("containerLightNight--darkMode");
  firstScreen.classList.toggle("body--darkMode");
  formNewsletter.classList.toggle("body--darkMode");
});

// ********** CHANGEMENT DU TITLE ********** //
//! Quand on clique sur un élement du menu, le titre de la page ("title") s'actualise automatiquement :
function titleDynamic() {
  const navbarItems = document.querySelectorAll(".navbar__items");
  const title = document.querySelector("title");
  const navbarItemsTextContent = [
    "Présentation",
    "Technologies",
    "Projets",
    "Contact",
  ];

  for (const navbarItem of navbarItems) {
    switch (navbarItem.textContent) {
      case navbarItems[0].textContent:
        navbarItem.addEventListener("click", function () {
          title.textContent = navbarItemsTextContent[0];
        });
        break;
      case navbarItems[1].textContent:
        navbarItem.addEventListener("click", function () {
          title.textContent = navbarItemsTextContent[1];
        });
        break;
      case navbarItems[2].textContent:
        navbarItem.addEventListener("click", function () {
          title.textContent = navbarItemsTextContent[2];
        });
        break;
      case navbarItems[3].textContent:
        navbarItem.addEventListener("click", function () {
          title.textContent = navbarItemsTextContent[3];
        });
        break;

      default:
        navbarItem.addEventListener("click", function () {
          title.textContent = "Portfolio William Mbakop";
        });
        break;
    }
  }
}

titleDynamic();

// ********** ANIMATION PHOTO PROFIL ********** //

//! Au  survol de l'image, la photo change

const presentationPicture = document.querySelector(".presentation__picture");

presentationPicture.addEventListener("mouseover", function () {
  if (
    presentationPicture.src ==
    "https://williammbakop.github.io/portfolio/images/photo_profil.jpg"
  ) {
    presentationPicture.src =
      "https://williammbakop.github.io/portfolio/images/picture-logo.png";
  } else {
    presentationPicture.src =
      "https://williammbakop.github.io/portfolio/images/photo_profil.jpg";
  }
});

