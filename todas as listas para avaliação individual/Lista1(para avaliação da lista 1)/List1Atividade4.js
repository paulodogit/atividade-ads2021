//ler o nome de uma pessoa -> nome = ??
//ler o total de anos de uma pessoa -> ta = ??
//ler o total de meses de uma pessoa -> tm = ??
//ler o total de dias de uma pessoa -> td = ??
//ler quantos dias tem um ano -> DA = ??
//ler quantos dias tem um mês -> DM = ??
//calcular a primeira expreção -> td * 365 = total de dias que tem em x anos (tda)
//calcular a segunda expreção -> tm * 30 = total de dias que tem em x meses (tdm)
//calcualr a terceira expreção -> ta + tm + ta
//calcular as 3 operações -> ta + tm + td + tda + tdm
//escreva o resultado em dias vividos

console.log("");

console.log("----Calcule quanto tempo de vida uma pessoa já teve.----");

console.log("")

pacote=require("readline-sync")
a=pacote.question('informe o nome da pessoa  ')
b=pacote.questionFloat('informe quantos anos essa pessoa tem  ')
function idade(n1, n2) {
    return (n2*365)
}
console.log('o total de dias vividos de '+a +' é: '+idade(a,b) + ' dias')