let ham = document.querySelector(".hamburger");
let menu = document.querySelector(".mobilemenu");
let cards  = document.querySelector(".gallery")

ham.addEventListener("click", function () {
  menu.classList.toggle("showlinks");
  if (menu.classList.contains("showlinks")){
      cards.style.display = "none"
  }
  else{
     cards.style.display = "block";
  }
});
