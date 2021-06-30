//ler um número inteiro -> ni = ?
//escreva em CENTENA = X
//escreva em DEZENA = X
//escreva em UNIDADE = X
console.log("")
console.log("----Calcule um determinado numero e mostre em Unidade, Dezena e Centena.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe um numero inteiro  ')
function dezena(n1) {
    return n1/100
}
console.log(a+ ' tem '+ dezena(a).toFixed(2)+ ' centenas,' + ( dezena(a)*10).toFixed(2)+ ' dezenas,' + ( dezena(a)*100)+ ' unidades.')