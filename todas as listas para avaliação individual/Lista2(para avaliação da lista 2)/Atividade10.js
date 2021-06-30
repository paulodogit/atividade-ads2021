//informe 4 notas de um aluno -> n1, n2, n3, n4
//calcule
//mostre se esse aluno foi reprovado ou aprovado
console.log("")
console.log("----Calcule a nota de um aluno e mostre se está APROVADO ou REPROVADO.----");
console.log("nessa questão trabalhamos com nota 0-100.")
console.log("a média mínima para aprovação é 60.")
console.log("")

//informe 4 notas//
var readline = require("readline-sync");
var num = parseInt(readline.question("Informe a nota do 1 Bimestre: "));
var num1= parseInt(readline.question("Informe a nota do 2 Bimestre: "));
var num2 = parseInt(readline.question("Informe a nota do 3 Bimestre: "));
var num3 = parseInt(readline.question("Informe a nota do 4 Bimestre: "));

//média//
var média = 60

var cal = (num+num1+num2+num3)/4

function nota(){
if(cal < média){
    console.log("Reprovado")
}else if(cal >= média){
    console.log("Aprovado")
}
}
nota();