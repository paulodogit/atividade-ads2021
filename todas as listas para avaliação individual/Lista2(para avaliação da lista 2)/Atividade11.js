//informe 4 notas de um aluno -> n1, n2, n3, n4
//calcule a média desse aluno
//mostre se esse aluno foi reprovado ou aprovado
console.log("")
console.log("----Calcule a nota de um aluno e mostre se está APROVADO ou REPROVADO.----");
console.log("nessa questão trabalhamos com nota 0-100.")
console.log("o peso total das notas é igual a 10 e a média mínima para aprovação é 24.")
console.log("")

//informe 4 número//
var readline = require("readline-sync");
var num1 = parseInt(readline.question("Nota do 1 Bimestre: "));
var num2 = parseInt(readline.question("Nota do 2 Bimestre: "));
var num3 = parseInt(readline.question("Nota do 3 Bimestre: "));
var num4 = parseInt(readline.question("Nota do 4 Bimestre: "));


//média//
var média = 24

var cal = ((num1+num2+num3+num4)/10)

function NotaPeso(){
if(cal < média){
    console.log("Reprovado")
}else if(cal >= média){
    console.log("Aprovado")
}
}
console.log("o peso da primeiro nota é 1.")
console.log('o peso da segunda nota é 2.')
console.log('o peso da terceira nota é 3.')
console.log("o peso da quarta nota é 4.")
NotaPeso();