

console.log('nesse programa iremos calcular o fatorial de um número que você nos informará. ')
pacote=require("readline-sync")
a=pacote.questionFloat('informe o numero a ser fatorado ')
b=a
i=0
function fatorial1() {
for (i=a-1;i>0;i--) {
    a*=i;
}
}
fatorial1();
console.log(`${b}!= `+a)
console.log('fim do programa')