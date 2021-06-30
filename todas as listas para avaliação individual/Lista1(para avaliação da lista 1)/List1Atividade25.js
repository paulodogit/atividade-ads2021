//leia o nome de uma pessoa -> nome = ?
//calcule o volume de uma caixa d'agua -> v = ?
//escreva o resultado
console.log("")
console.log("----Calcule o volume de uma caixa d'água.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o raio  ')
b=pacote.questionFloat('informe a altura  ')
function caixa(n1,n2) {
    return ((3.14*n1)**2*(n2))
}
console.log('o volume da caixa cilíndrica é: '+caixa(a,b).toFixed(2)+ ' cm³')