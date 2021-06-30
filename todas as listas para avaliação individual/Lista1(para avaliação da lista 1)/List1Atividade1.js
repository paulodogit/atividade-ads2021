//leia A Dimensão do Terreno da Empresa Imobilis -> larg = 15
//leia A Dimensão do Terreno da Empresa Imobilis -> alt = 50
///calcular as dimensão do terreno -> larg * alt = ??
//escreva o resultado

console.log("")

console.log("----Informe as dimensões de um determinado terreno----")
console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe a base do terreno  ')
b=pacote.questionFloat('informe a altura do terreno ')

function dimensao (n1, n2) {
    return n1*n2
}
console.log('a área do terreno é: '+dimensao(a,b))