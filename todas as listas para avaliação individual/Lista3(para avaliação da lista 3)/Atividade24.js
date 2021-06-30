

pacote=require("readline-sync")
i=0
console.log('nesse programa vamos fazer a pa de um número que você informará. ')
a=pacote.questionFloat('informe o valor inicial da PA ')
b=pacote.questionFloat('informe a razao da PA  ')
function pa1() {
for (i=1;i<11;i++) {
    if (i<2) {
        console.log(a)
    }
    if (i>=2) {
        console.log((a+b));
        a+=b
    }
}
}
pa1();
console.log('fim do programa')