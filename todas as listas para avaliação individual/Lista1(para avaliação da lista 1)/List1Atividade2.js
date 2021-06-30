//ler quantos Cavalos tem no haras -> cav = ??
//ler quantas patas possui um cavalo -> pat = ??
//calcule quantas ferraduras são necessarios -> cav * pat
//escreva o resultado

console.log("")

console.log("----Calcule quantas ferraduras são necessárias para equipar");
console.log("todos os cavalos comprados para um haras----");

console.log("");

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de cavalos  ')
function haras(n1,n2) {
    return n1*n2
}
console.log('o total de ferraduras são: '+ haras(a,4))