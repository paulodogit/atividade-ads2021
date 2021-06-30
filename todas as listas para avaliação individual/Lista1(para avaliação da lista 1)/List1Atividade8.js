//ler o nome do primeiro aluno -> pa = ?
//ler o nome do segundo aluno -> sa = ?
//ler o nome do terceiro aluno -> ta = ?
//ler a nota do primeiro aluno -> npa = ?
//ler a nota do segundo aluno -> nsa = ?
//ler a nota do terceiro aluno -> nta = ?

console.log("");

console.log("----Calcule a média ponderada de três médias.----");

console.log("");

pacote=require("readline-sync")
a=pacote.questionFloat('informe a primeira nota  ')
b=pacote.questionFloat('informe a segunda nota  ')
c=pacote.questionFloat('informe a terceira nota  ')
function media(n1,n2,n3) {
    return (n1+n2+n3)/6
}
console.log('a média ponderada das notas é: '+media(a,b,c).toFixed(2))