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


//Beställning
var bestall_form = document.getElementById("bestall_online_form")

function skicka_bestallning(){
    var namn = bestall_form["name"].value;
    var datum = bestall_form["date"].value;
    var number = bestall_form["number"].value;
    var beskrivning = bestall_form["message"].value;
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://127.0.0.1:5000/api/new/bestallning"; 
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    //     // Response
    //     var response = this.responseText;
    // }
    // };
    // var data = {name: namn, datum: datum, number : number, beskrivning:beskrivning };
    // xhttp.send(JSON.stringify(data));
    // if (namn.length > 0 && datum.length > 0 && number.length > 0 && beskrivning.length > 0){
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.open("POST", "http://127.0.0.1:5000/api/new/bestallning"; 
    //     xhttp.setRequestHeader("Content-Type", "application/json");
    //     xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         // Response
    //         var response = this.responseText;
    //     }
    //     };
    //     var data = {name: namn, datum: datum, number : number, beskrivning:beskrivning };
    //     xhttp.send(JSON.stringify(data));
    //     alert("Success!")
    // }
    // else{
    //     alert("Du måste fylla i formuläret först!")
    // }
}



//Event listeners
mybutton.addEventListener("click", topFunction)
mobile_meny.addEventListener("click", mobileMeny)
bestall_form.addEventListener("submit", skicka_bestallning);









