//informe três números -> n1 = ?, n2 = ?, n3 = ?
//imprima se é um triângulo -> isósceles, equilátero, escaleno
//imprima a mensagem "não é um triãngulo"
console.log("")
console.log("----Calcule três lados de um triângulo e mostre se ele é ISÓSCELES, EQUILÁTERO, ESCALENO ou NÃO É UM TRIÂNGULO.----");
console.log("")

var pacote=require("readline-sync")
var lado1=pacote.questionFloat("digite o tamanho do primeiro lado ")
var lado2=pacote.questionFloat("digite o tamanho do segundo lado ")
var lado3=pacote.questionFloat("digite o tamanho do terceiro lado ")

function triangulo(){
    if ((lado1+lado2)<lado3 || ((lado1+lado3)<lado2 || (lado2+lado3)<lado1)) {
        console.log("não é um triângulo")
    } else if (lado1==lado2 && lado1==lado3) {
        console.log("é um triângulo equilátero")
    } else if (lado1==lado2 || lado1==lado3 || lado2==lado3) {
        console.log("é um triângulo isósceles")
    } else if (lado1=lado2 && (lado1=lado3) && (lado2=lado3)) {
        console.log("é um triângulo escaleno") 
    } else {
        console.log("ERRO")
    }
}
triangulo();