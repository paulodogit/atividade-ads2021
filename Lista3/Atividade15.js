console.log("")
console.log("----nesse programa iremos mostrar se um número x é primo ou não.----");
console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe o numero  ')
i=0
result=0

function primos1() {
for (i=2; i<=a/2;i++) {
    if (a%i==0) {
        result++;
        break;
    }
}
if (result==0) {
    console.log(`${a} é um número primo`)
} else {
    console.log(`${a} não é um número primo`)
}
}
primos1();
console.log('fim do programa')