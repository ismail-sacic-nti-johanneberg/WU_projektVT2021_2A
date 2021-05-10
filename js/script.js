//Meny knappen för mobil vyn
var mobile_meny = document.getElementById("mobile_meny")

function mobileMeny() {
  document.getElementById("mobile_meny").classList.toggle("change");
  document.getElementById("nav").classList.toggle("nav_active");
}


// Scroll to top -  knapp (När man trycker på knappen så scrollar den upp till topen av sidan)
var mybutton = document.getElementById("scroll_btn");

//När man  scrollar ner så kommer knappen att komma upp (150px ner)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Functionen för att scrolla upp av sig själv
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Event listeners
mybutton.addEventListener("click", topFunction)
mobile_meny.addEventListener("click", mobileMeny)









