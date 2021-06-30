

console.log('nesse programa iremos mostrar os n primeiros pares e ímpares que antecedem um número x. ')
pacote=require("readline-sync")
a=pacote.questionFloat('informe um numero para que verifiquemos os n primeiros numeros pares e impares ')
i=0
function parimpar1() {
for (i=0;i<=a;i++) {
    if (i%2==0) {
        console.log(`números pares que antecedem ${a} :` +i )
    }
    if (i%2>=1) {
        console.log(`números ímpares que antecedem ${a} :` +i)
    }
}
}
parimpar1();
console.log('fim do programa')