//informe primeiro número -> n1 = ?
//informe segundo número -> n2 = ?
//informe terceiro número -> n3 = ?
//imprima em ordem crescente
console.log("")
console.log("----Calcule números inteiros e mostre em ordem decrescente.----");
console.log("")

var pacote=require("readline-sync")
var Pri=pacote.questionFloat("informe o primeiro numero inteiro ")
var Se=pacote.questionFloat("informe o segundo numero inteiro ")
var Ter=pacote.questionFloat("informe o terceiro numero inteiro ")
var números=[Pri, Se, Ter];
números.sort(function(a, b) {
    return b - a;
}); 
console.log("a ordem decrescente dos números é: "+ números )