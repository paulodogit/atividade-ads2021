//informe um dia -> DD = ?
//informe um mês -> MM = ?
//informe um ano -> AA = ?
console.log("")
console.log("----Calcule dia, mês e ano e mostre qual é a data do dia seguinte.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o dia  ')
b=pacote.questionFloat('informe o mes  ')
c=pacote.questionFloat('informe o ano  ')
var novodia=1
var Seguinte=a+novodia
var novomes=1
var Meseguinte=b+novomes
var novoano=1
var Anoseguinte=c+novoano
var Maisum=1

function data(){
    if (Seguinte>30) {
    console.log("o dia seguinte é: "+novodia)
}   else {
    console.log("o dia seguinte é "+Seguinte)
}   if (Seguinte>30) {
    console.log("o mês é:"+Meseguinte)
}   else {
    console.log("o mês é: " +b)
}   if (Meseguinte>12) {
    console.log("o ano é: "+ Anoseguinte)
}   else {
    console.log("o ano é: "+ c)
}

}
data();