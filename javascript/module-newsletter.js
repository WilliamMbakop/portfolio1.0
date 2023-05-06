const moduleNewsletter = {
  init: function () {
    setTimeout(moduleNewsletter.handleFormVisibility, 10000);
    const buttonCloseNewsletter = document.querySelector(".formNewsletter__buttonClose")
    buttonCloseNewsletter.addEventListener(
      "click",
      moduleNewsletter.handleCloseform
    );
    const formNewsletter = document.querySelector(".formNewsletter");

    formNewsletter.addEventListener(
      "submit",
      moduleNewsletter.handleFormErrors
    );
  },

  handleFormErrors: function (event) {
    // test = le message d'erreur est visible si la valeur de l'input est vide. Il est invisible dans le cas contraire
    // Si la soumission du formulaire est ok, on envoit la valeur de l'input dans le localStorage
    event.preventDefault();
    const formNewsletter = document.querySelector(".formNewsletter");
    let inputformNewsletter = document.querySelector(".formNewsletter__input");
    let inputformNewsletterValue = inputformNewsletter.value;

    const errorNewsletter = document.createElement("p");
    errorNewsletter.classList.add("errorNewsletter");
    errorNewsletter.classList.add("errorNewsletterHidden");
    errorNewsletter.textContent = "Champs de saisie vide !!!";
    formNewsletter.append(errorNewsletter);

    if (inputformNewsletterValue == "") {
      inputformNewsletter.value = "";
      errorNewsletter.classList.remove("errorNewsletterHidden");
      errorNewsletter.classList.add("errorNewsletterActive");
    } else {
      errorNewsletter.classList.add("errorNewsletterHidden");
      errorNewsletter.classList.remove("errorNewsletterActive");
      formNewsletter.style.display = "none";
      localStorage.setItem("email", inputformNewsletterValue);
    }
  },

  handleFormVisibility: function (event) {
    //  Le formulaire s'affiche, si et seulement si aucune valeur email n'est présente dans le localStorage
    const formNewsletter = document.querySelector(".formNewsletter");
    if (!localStorage.getItem("email")) {
      formNewsletter.classList.remove("formNewsletterHidden");
      formNewsletter.classList.add("formNewsletterActive");
      formNewsletter.style.transition = "1s ease";
    }
  },

  handleCloseform: function (event) {
    // Le formulaire disparait lorsqu'on clique sur la croix
    const formNewsletter = document.querySelector(".formNewsletter");
    formNewsletter.style.display = "none";
  },
};
