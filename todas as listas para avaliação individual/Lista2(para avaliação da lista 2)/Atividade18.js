//informe um dia -> DD = ?
//informe um mês -> MM = ?
//informe um ano -> AA = ?
console.log("")
console.log("----Calcule dia, mês e ano e mostre qual é a data do dia anterior.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o dia  ')
b=pacote.questionFloat('informe o mes  ')
c=pacote.questionFloat('informe o ano  ')
var novodia=1
var Anterior=a-novodia
var novomes=1
var Mesanterior=b-novomes
var novoano=1
var Anoanterior=c-novoano
var Maisum=30
var Maisdois=12

function data(){
    if (Anterior<1) {
    console.log("o dia anterior é: "+Maisum)
}   else {
    console.log("o dia anteriro é "+Anterior)
}   if (Anterior<1) {
    if (Mesanterior==0) {
        console.log("o mês é: "+Maisdois)
    }
} else {
    console.log("o mês é: " +b)
}   if (Mesanterior<1) {
    console.log("o ano é: "+ Anoanterior)
}   else {
    console.log("o ano é: "+ c)
}

}
data();