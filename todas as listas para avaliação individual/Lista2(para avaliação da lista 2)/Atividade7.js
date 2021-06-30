//informe primeiro número -> n1 = ?
//informe segundo número -> n2 = ?
//informe terceiro número -> n3 = ?
//mostre se ele é multiplo de outro
console.log("")
console.log("----Calcule três números e mostre se eles são multipos um pelo outro.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o primeiro numero  ')
b=pacote.questionFloat('informe o segundo numero  ')
c=pacote.questionFloat('informe o terceiro numero  ')

function numeros(){
    if (a%a==0) {
        console.log(a + ' é múltiplo de ' + a)
    }
    if (a%b==0) {
        console.log(a + ' é múltiplo de ' + b)
    } 
    if (a%c==0) {
        console.log(a + ' é múltiplo de ' + c)
    }
    if (b%a==0) {
        console.log(b + ' é múltiplo de ' + a)
    }
    if (b%b==0) {
        console.log(b + ' é múltiplo de ' + b)
    }
    if (b%c==0) {
        console.log(b + ' é múltiplo de ' + c)
    }
    if (c%a==0) {
        console.log(c + ' é múltiplo de ' + a)
    }
    if (c%b==0) {
        console.log(c + ' é múltiplo de ' + b)
    }
    if (c%c==0) {
        console.log(c + ' é multiplo de ' + c)
    }
}
numeros();