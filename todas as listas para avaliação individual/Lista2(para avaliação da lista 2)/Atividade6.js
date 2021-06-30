//informe um número de risco -> n1 = ?
//imprima "baixo" para os valores de 0 a 3
//imprima "médio" para os valores de 3 a 6
//imprima "alto" para os valores de 6 a 9
//imprima os demais casos "grave"
console.log("")
console.log("----Calcule e mostre se o nível é BAIXO, MÉDIO, ALTO ou GRAVE.----");
console.log("o nível baixo está entre 0-3, médio entre 4-6, alto entre 7-9, alto para acima de 9.")
console.log("")

//informe um número//var readline = require("readline-sync");
var readline = require("readline-sync");
var num1 = parseInt(readline.question("Informe um numero: "));

function nivel(){
if(num1 >= 0 && num1 <=3){
    console.log("baixo")
}else if(num1 >= 4 && num1 <= 6){
    console.log("médio")
}else if(num1 >= 7 && num1 < 9){
    console.log("alto")
}else if(num1 >= 10){
    console.log("grave")
}else if(num1 < 0) {
    console.log('ERRO, pois o número informado é abaixo de 0.')
}
}
nivel();