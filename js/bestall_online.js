
var bestall_form = document.getElementById("bestall_online_form")

function send_bestallning(){
    var namn = bestall_form["name"].value;
    var datum = bestall_form["date"].value;
    var number = bestall_form["number"].value;
    var beskrivning = bestall_form["message"].value;
    if (namn.length > 0 && datum.length > 0 && number.length > 0 && beskrivning.length > 0){
        // var xhttp = new XMLHttpRequest();
        // xhttp.open("POST", "ajaxfile.php", true); 
        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.onreadystatechange = function() {
        // if (this.readyState == 4 && this.status == 200) {
        //     // Response
        //     var response = this.responseText;
        // }
        // };
        // var data = {name: namn, datum: datum, number : number, beskrivning:beskrivning };
        // xhttp.send(JSON.stringify(data));
        alert("Success!")
    }
    else{
        alert("Du måste fylla i formuläret först!")
    }
}


bestall_form.addEventListener("submit", send_bestallning);
