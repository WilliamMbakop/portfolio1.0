const moduleFirstScreen = {
init : function(){
    const enter = document.querySelector(".firstScreen__enter");
    enter.addEventListener("click", moduleFirstScreen.handleClickEnter);
    setInterval(moduleFirstScreen.animation, 1000);

} ,

handleClickEnter : function() {
  const firstScreen = document.querySelector(".firstScreen");
  const bodyContainer = document.querySelector(".body__container");

  if(firstScreen.classList == "firstScreen") {
    firstScreen.classList = "firstScreen displaynone";
    bodyContainer.classList = "body__container";
  }

  if(firstScreen.classList == "firstScreen body--darkMode") {
    firstScreen.classList = "firstScreen displaynone";
    bodyContainer.classList = "body__container";
  }


},

animation: function() {
  const enter = document.querySelector(".firstScreen__enter");
 
    enter.classList.toggle("firstScreen__enter--anim");
 

}
}