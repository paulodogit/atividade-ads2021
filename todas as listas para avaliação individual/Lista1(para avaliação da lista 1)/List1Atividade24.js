//ler a quantidade de partes de água -> pa = 8
//ler a quantidade de partes de suco -> ps = 2
//calcular
//escrever o resultado
console.log("")
console.log("----Calcule quantos litros de água e suco são necessarios para fazer 'X' refresco.----");
console.log('')
console.log('a proporção é: 8 partes de água e 2 partes de maracujá.')
console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe quantos litros de refresco serao feitos  ')
function refresco(n1) {
    return n1
}
console.log('o total de água em litros para fazer '+a+ ' litros de refreco é: '+refresco(a)*0.80+ ' litros')
console.log('o total de maracujá em litros para fazer '+a+ ' litros de refresco é: '+refresco(a*0.20 + ' litros'))