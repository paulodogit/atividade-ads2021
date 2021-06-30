//informe o primeiro número -> n1
//informe o segundo número -> n2
//informe o terceiro número -> n3
//escreva o menor número
console.log("")
console.log("----Calcule três números e mostre qual é o menor.----");
console.log("")

var readline = require("readline-sync");
var num = parseInt(readline.question("Informe um numero: "));
var num1 = parseInt(readline.question("Informe outro numero: "));
var num2 = parseInt(readline.question("Informe outro numero: "));

function menor(){
if(num < num1 && num < num2){
    console.log("O número menor é: " + num)
}else if(num1 < num && num1 < num2){
    console.log("O número menor é: " + num1)
}else{
    if(num2 < num && num2 < num1){
        console.log("O número menor é: " + num2)
    }else{
        if(num == num1 == num2)
        console.log("O valor informado são iguais, defina outro número")
    }
}
}
menor();