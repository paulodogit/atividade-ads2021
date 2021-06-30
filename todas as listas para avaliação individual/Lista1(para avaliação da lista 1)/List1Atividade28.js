//leia o nome do primeiro aluno -> pa = ?
//leia o nome do segundo aluno -> sa = ?
//calcule a sua média -> m = 7.0
//ler a nota peso -> np
//escreva o resultado
console.log("")
console.log("----Calcule a média de duas notas.----");
console.log("as notas tem pesos 2 e 3, respectivamente.")
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe a primeira nota  ')
b=pacote.questionFloat('informe o segundo numero  ')
function media(n1,n2) {
    return ((n1+n2)/5)
}
console.log('a média ponderada das notas é: '+media(a,b).toFixed(2))