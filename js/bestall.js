var bestall_form = document.getElementById("bestall_online_form")

function skicka_bestallning(){
  var namn = bestall_form["name"].value;
  var datum = bestall_form["date"].value;
  var number = bestall_form["number"].value;
  var beskrivning = bestall_form["message"].value;

  if (namn.length > 0 && datum.length > 0 && number.length > 0 && beskrivning.length > 0){
    sendMail();
    alert("Beställningen är skickad!");
  }
  else{
    alert("Du måste fylla i formuläret först!");
  }
}

function sendMail(parms){

    var tempParams = {

        from_name : bestall_form["name"].value,
        from_number :bestall_form["number"].value,
        message: bestall_form["message"].value,
        from_date : bestall_form["date"].value.toString(),

    };

    emailjs.send("service_ghqu10e","template_gph8f5q",tempParams)
    .then(function(res){
        console.log("Success", res.status);
    })

}

//Event listeners
bestall_form.addEventListener("submit", skicka_bestallning);