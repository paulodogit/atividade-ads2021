//ler o preço da litro da gasolina -> lg = ??
//ler o pagamento feito pelo cliente -> ppc = ??
//ler quantos litros de gasolina ele colocou -> qlc = ??
//calcular
//escreva o resultado

console.log("")

console.log("----Calcule quantos litros uma certa pessoa conseguiu colocar em seu tanque.----")

console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor do litro da gasolina  ')
b=pacote.questionFloat('informe o valor a ser colocado de gasolina  ')
function gasolina(n1,n2) {
    return n2/n1
}
console.log('o total de litros de gasolina colocados são: '+gasolina(a,b).toFixed(2)+ ' L')