console.log("")
console.log("----Calcule e mostre os primeiros números primos.----");
console.log("")

pacote=require('readline-sync')

function mostrarprimos(num) {
    cont=0
    for (var i=1; i<=num; i++) {
        if (num%i==0) {
            cont++
        }
    }
    if (cont==2) {
        console.log(`${num} é primo`)
    }
}
nume=pacote.questionFloat('informe um numero  ')
for (var f=1; f<=nume; f++) {
    mostrarprimos(f)
}