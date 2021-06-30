//leia o nome da Empresa -> nome_ep = Quilo Bem-Bão
//leia o valor de cada quilo -> vq = R$ 12.00
//calcule
//escreva o resultado

console.log("")

console.log("----Calcule quanto o cliente vai pagar se consumir 'X kg'de um prato.----");
console.log('o peso do kg custa R$:12,00. ')

console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe o peso em kg da refeicao do cliente  ')
function quilo(n1,n2) {
    return n1*n2
}
console.log('o total a ser pago pelo cliente é: R$:'+quilo(a,12.00).toFixed(2))