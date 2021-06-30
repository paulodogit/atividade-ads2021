//ler o nome de uma pessoa -> nome = ?
//ler um número escolhido -> num = ?
//criar uma tabuada
//calcular a tabuada
//escreva os resultados
console.log("")
console.log("----Calcule a tabuada de um número.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o numero a ser tabuado  ')
i=0
for (i=0;i<11;i++) {
    console.log(`${a} X ${i} = `+a*i)
}