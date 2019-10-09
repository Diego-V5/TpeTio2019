"use strict"
function calc(){
    var argOne=document.getElementById('arg1').value; 
    var argTwo=document.getElementById('arg2').value;
    var ans=(argOne*argTwo); 
    document.getElementById('result').innerHTML=argOne + ' multiplicado por ' + argTwo + ' es igual a ' + ans;
    }
function prompter() {
    var reply = prompt("Buenas ¿cuál es tu nombre y apellido?", "")
    alert ( "Es un gusto tenerte aquí " + reply + "!")
    }
var ran
ran = Math.round(Math.random()*50000)
document.write("Usted es el visitante " + ran + " de esta página.")
alert("Alert bot"
);
window.setInterval (BlinkIt, 500);
function confirmacion() {
	var pregunta = confirm("¿Deseas visitar la página principal?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "http://www.solartec.com.ar/";
	}
	else{
		alert("Quizás en otro momento...\n Gracias de todas formas")
	}
function saludar(){
    let saludo=" ";
    let tiempo= new Date().getHours();

    if(tiempo < 12){
        saludo = "buenos dias";
    }
    else if(tiempo <20){
        saludo = "buenas tardes";
    }
    else{
        saludo = "buenas noches";
    }
    document.getElementById("saludo").innerHTML = saludo;
}

}