/*
var idade = prompt("Qual sua idade? "); 
document.write ("Você tem " + idade + " anos de idade.");
document.write ("<br>");

var peso= prompt("Qual seu peso? ");
document.write ("Você tem " + peso + "kgs.");
document.write ("<br>");

var altura= prompt("Qual sua altura?");
document.write("Você tem " + altura + "m. de altura."); */

var peso = prompt("Qual seu peso? ");
document.write ("Você tem " + peso + "kgs.");
document.write ("<br>");

var altura = prompt("Qual sua altura ");
document.write("Você tem " +altura + "m. de altura.");
document.write ("<br>");


var num1 = prompt("qual seu peso? ");
num1 = parseInt(num1);
document.write ("<br>");

var num2 = prompt("qual sua altura? ");
num2 = parseInt(num2);
document.write ("<br>");

/*var soma = num1+num2;
var sub  = num1-num2;
var mult = num1 * num2;*/
var div  = (num1)/(num2*num2);
/*document.write("Adição        = ", soma, "<br>");
document.write("Subtração     = ", sub, "<br>");
document.write("Multiplicação = ", mult, "<br>");*/
document.write("IMC       = ", div);