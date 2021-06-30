//ler o Primeiro número -> N1 = ?
//ler o Segundo número -> N2 = ?
//calcule os dois números usando a divisão
//escreva o resultado
console.log("")
console.log("----Calcule a divisão de dois números.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o primeiro numero  ')
b=pacote.questionFloat('informe o segundo numero  ')
function divisao(n1,n2) {
    return (n1/n2)
}
console.log('o resultado da divisão do primeiro número pelo segundo é: '+divisao(a,b).toFixed(2))