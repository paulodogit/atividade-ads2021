console.log("")
console.log("----nesse programa iremos mostrar se um número x é primo ou não.----");
console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe o numero  ')
i=0
cont=0

function primos1() {
for (i=1; i<=a;i++) {
    if (a%i==0) {
        cont++;
    }
}
if (cont==2) {
    console.log(`${a} é um número primo`)
} else {
    console.log(`${a} não é um número primo`)
}
}
primos1();
console.log('fim do programa')