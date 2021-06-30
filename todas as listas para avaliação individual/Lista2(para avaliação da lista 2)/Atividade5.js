//informe um número de alerta -> n1 = ?
//imprima se ele for grave
//imprima o valor informado se esta entre 0 a 10
console.log("")
console.log("----Calcule e mostre se o nível está grave e entre 0 e 10.----");
console.log("em caso de número inferior a 0 ou superior a 10, dará erro.")
console.log("")

//informe um número//
var readline = require("readline-sync");
var num = parseInt(readline.question("Informe um numero: "));


function nivelGrave(){
if(num == 10){
    console.log("nivel grave e está no nível 10.")
}else if(num>=0 && num < 10){
    console.log("alerta inferior a grave e está entre 0 e 9.")
}else{
    console.log("ERRO")
}
}
nivelGrave();

    console.log("O número que você escolheu foi: " + num);