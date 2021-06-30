//ler o dia de um mês -> dm = ??
//ler o mês de um ano -> ma = ??
//escreva quantos dias se passaram desde o inicio do ano

console.log("");

console.log("----Calcule a quantidade de dias que se passaram desde o início do ano.----");

console.log("");

pacote=require('readline-sync')
a=pacote.questionFloat('informe o dia do mes  ')
if (a<0 || a>30) {
    console.log('ERRO, POIS O DIA INFORMADO NÃO É VALIDO.')
} else {
b=pacote.questionFloat('informe o mes do ano  ')
if (b<0 || b>12) {
    console.log('ERRO, POIS O MÊS INFORMADO NÃO É VALIDO.')
} else {
function data(n1,n2) {
    return n1+(n2*30)
}
console.log('o total de dias decorridos desde o início do ano é: '+data(a,b)+ ' dias')}}