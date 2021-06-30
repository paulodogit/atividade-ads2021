//leia um preço de um produto -> pp = ?
//leia o desconto -> d = 10%
//calcule
//escreva o novo valor
console.log("")
console.log("----Calcule o preço de um determinado produto com '10%' de desconto.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor do produto  ')
function desconto(n1) {
    return ((n1)-(n1*0.10))
}
console.log('o valor final do produto com desconto de 10% é: R$:'+desconto(a).toFixed(2))