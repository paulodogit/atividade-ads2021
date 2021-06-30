//informe três números -> n1 = ?, n2 = ?, n3 = ?
//imprima se é um triângulo -> isósceles, equilátero, escaleno
//imprima a mensagem "não é um triãngulo"
console.log("")
console.log("----informe 3 medidas, e verificaremos se é ou não um triângulo e, caso seja, falaremos se é um equilátero, isósceles, ou escaleno.");
console.log("")

var pacote=require("readline-sync")
var x=pacote.questionFloat('informe o valor de x  ')
var y=pacote.questionFloat('informe o valor de y  ')
var z=pacote.questionFloat('informe o valor de z  ')

function medidores(){
    if (x+y<z || y+z<x || x+z<y ) {
        console.log('as medidas informadas não formam um triângulo.')
    } else {
        if (x==y && x==z) {
            console.log('as medidas formam um triângulo equilátero')
        } else if (x==y || x==z || y==z) {
            console.log('as medidas formam um triângulo isósceles')
        } else if (x=y && (x=z) && (y=z)) {
            console.log('é um triângulo escaleno')
        } 
    }
}
medidores();