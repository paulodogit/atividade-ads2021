//leia o peso de uma pessoa -> peso = ?
//converta o peso em gramas
//leia em gramas o peso de uma pessoa -> ?
//escreva o resultado final
console.log("")
console.log("----Calcule e mostre o peso de uma pessoa em gramas.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o peso da pessoa  ')
function peso(n1) {
    return (n1*1000)
}
console.log('o peso da pessoa em gramas é: '+peso(a)+ ' gramas')