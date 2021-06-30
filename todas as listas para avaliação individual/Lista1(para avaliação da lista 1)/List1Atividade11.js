//ler o nome de uma Empresa
//ler os dias sem acidentes de uma Empresa -> DSA = ??
//ler a conversão de dias para ano -> da = ??
//ler a conversão de dias para mês -> dm = ??
//ler os dias -> d = ??
//ler os dias que tem em um mês -> mês = 30
console.log("")
console.log("----Calcule a quantidade de dias sem acidentes de uma empresa em meses e anos.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o tempo sem acidentes em dias  ')
function acidente(n1) {
    return n1
}
console.log('o tempo sem acidentes em dias são: '+acidente(a))
console.log('o tempo sem acidentes em meses são: '+(acidente(a)/30).toFixed(2))
console.log('o tempo sem acidentes em anos são: '+ (acidente(a)/365).toFixed(2))