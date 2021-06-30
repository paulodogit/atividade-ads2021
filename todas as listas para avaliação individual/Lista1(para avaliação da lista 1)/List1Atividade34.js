//digite um nome -> nome = ?
//calcule a area de um quadrado
//escreva o resultado
console.log("")
console.log("----Calcule a area de um determinado quadrado.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe a base do quadrado  ')
b=pacote.questionFloat('informe a altura do quadrado  ')
function quadrado(n1,n2) {
    return (n1*n2)
}
console.log('A área do quadrado é: '+quadrado(a,b)+ ' cm²')