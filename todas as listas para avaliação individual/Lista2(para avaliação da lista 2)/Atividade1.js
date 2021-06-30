//informe primeiro número -> n1
//informe segundo número -> n2
//calcule os dois números -> n1 + n2
//escreva o resultado
console.log("")
console.log("----Calcule a soma de dois números.----");
console.log("")

pacote = require("readline-sync");
a=pacote.questionFloat("Informe um numero: ");
b=pacote.questionFloat("Informe outro numero: ");

function soma (n1,n2){
    return n1+n2
}
console.log("A soma entre os dois números é: " + soma(a,b));