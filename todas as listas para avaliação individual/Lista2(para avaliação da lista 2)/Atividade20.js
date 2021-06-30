//informe um valor -> v = ?
//calcule o menor número possível usando 100, 50, 5, 1
console.log("")
console.log("----Calcule e mostre o valor em reais decomposto em notas de 100, 50, 10, 5 e 1.----");
console.log("")

var pacote=require("readline-sync")
var reais=pacote.questionFloat("informe o valor total em reais  ")
var a=reais%100
var b=a%50
var c=b%10
var d=c%5

console.log("a menor decomposição possível para R$:" +reais+ " é: "+parseInt(reais/100) + " notas de 100")
console.log(parseInt(a/50) + " notas de 50")
console.log(parseInt(b/10) + " notas de 10 ")
console.log(parseInt(c/5)+ " notas de 5")
console.log(parseInt(d/1) + " notas de 1")
console.log("que totaliza R$:" + reais)