//escreva quantidades de granja -> qg = ??
//quantidades de anel na pata direita -> pd = 1
//quantidade de anel da pata esquerda -> pe = 2
//ler o valor do anel com chip -> vac = ??
//ler o valor do anel do alimento -> vaa = ??
console.log("")
console.log("----Calcule quanto será gasto para marcar 'X' frangos.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de frangos da granja  ')
function granja(n1) {
    return ((n1*4)+(n1*3.50)*2)
}
console.log('o custo total para marcar todos os frangos é: R$:'+granja(a))