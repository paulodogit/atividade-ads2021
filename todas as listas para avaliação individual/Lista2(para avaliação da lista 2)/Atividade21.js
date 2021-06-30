//informe um valor -> v = ?
//informe se o carro é acima ou abaixo de 1990
//calcule
//mostre o valor atual
//abaixo de 1990 é 1%
//acima de 1990 é 1,5%
console.log("")
console.log("----Calcule o valor a ser pago ao detran para transferencia de carros.----");
console.log('para carros fabricados antes de 1990 (1%) sobre o valor o do carro, a partir de 1990 em diante (1.5%) sobre o valor do carro.')
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o ano do carro  ')
b=pacote.questionFloat('informe o preco do carro  ')

var Juros1=0.010
var Juros2=0.015

function transferencia(){
    if (a<1990) {
        console.log("o preço da transferência é: R$:"+ (b*Juros1).toFixed(2))
    } else {
        console.log("o preço da transferência é: R$:"+ (b*Juros2).toFixed)
    }
}
transferencia();