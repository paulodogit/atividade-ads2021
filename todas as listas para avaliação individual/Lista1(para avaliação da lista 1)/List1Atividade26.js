//leia o primeiro número -> N1 = ?
//leia o segundo número -> N2 = ?
//leia o terceiro número -> N3 = ?
//calcule os três números
//escreva o resultado da multiplicação
console.log("")
console.log("----Calcule a multiplicação de três números.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe um numero inteiro  ')
b=pacote.questionFloat('informe o segundo numero inteiro  ')
c=pacote.questionFloat('informe o terceiro numero inteiro  ')
function multi(n1,n2,n3) {
    return (n1*n2*n2)
}
console.log('a multiplicação dos números resulta em: '+multi(a,b,c))