//Mobil knapp meny
function mobileMeny(x) {
    x.classList.toggle("change");
    document.getElementById("nav").classList.toggle("nav_active");
}


// Scroll to top knapp
var mybutton = document.getElementById("scroll_btn");

//När usern scrollar ner så kommer knappen att komma upp (150px ner)
window.onscroll = function() {scrollFunction()};

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