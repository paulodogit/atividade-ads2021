//informe um número de alerta -> n1 = ?
//imprima se ele for grave
//número só pode ser informado de 0 a 10
console.log("")
console.log("----Calcule e mostre o nível de risco.----");
console.log("O nível de alerta é grave ser for superior a 9.")
console.log("")

//informe um número//
var readline = require("readline-sync");
var nume = parseInt(readline.question("Informe um numero: "));

function nivelRisco(){
if(nume<=9) {
    console.log('O nível de alerta é inferior a grave.')
}else if(nume>9){ 
    console.log('o nível de alerta é grave.')
}
}
nivelRisco();