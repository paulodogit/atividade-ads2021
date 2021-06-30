//digite seu nome -> nome = ?
//calcule a área do losangulo
//escreva o resultado
console.log("")
console.log("----Calcule a área de um losango.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor da diagonal maior  ')
b=pacote.questionFloat('informe o valor da diagonal menor  ')
function losango(n1,n2) {
    return ((n1*n2)/2)
}
console.log('a área do losango é: '+losango(a,b)+ ' cm²')