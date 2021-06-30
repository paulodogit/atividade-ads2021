

console.log('nesse programa iremos calcular a média aritmética, quantidade de valores positivos e negativos, seguindos de suas porcentagens. ')
pacote=require("readline-sync")
i=0
a=0
t=0
s=0
n=0
p=0
console.log('digite 0 para finalizar o programa ')
function nsei1() {
do {
    console.log(a=pacote.questionFloat('informe um valor  '));
    i++;
    if (a<0 || a>0) {
        s=s+a;
        t++;
    }
    if (a<0) {
        n++;
    }
    if (a>0) {
        p++
    }
}
while (a<0 || a>0)
}
nsei1();
console.log('a média aritmética dos valores é: '+(s/t).toFixed(2))
console.log('a quantidade de valores positivos são: '+p)
console.log('a quantidade de valores negativos são: '+n)
console.log('a porcentagem de números positivos é: '+((p/t)*100).toFixed(2)+'%')
console.log('a porcentagem de números negativos é: '+((n/t)*100).toFixed(2)+'%')
console.log('fim do programa')