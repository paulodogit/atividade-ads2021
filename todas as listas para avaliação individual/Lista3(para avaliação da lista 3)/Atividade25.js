

pacote=require("readline-sync")
console.log('nesse programa vamos calcular a pg de um número que você nos informará. ')
a=pacote.questionFloat('informe o valor inical da PG  ')
b=pacote.questionFloat('informe a razao da PG  ')
i=0
function pg1() {
for (i=1;i<11;i++) {
    if (i<2) {
        console.log(a)
    }
    if (i>=2) {
        console.log((a*b));
        a*=b
    }
}
}
pg1();
console.log('fim do programa')