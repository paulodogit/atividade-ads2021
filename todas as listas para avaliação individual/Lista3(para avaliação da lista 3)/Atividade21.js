

pacote=require("readline-sync")
i=0
a=0
pa=0
im=0
pam=0
soma=0
tot=0

console.log('nesse programa calcularemos a quantidade de números pares e ímpares, a média dos valores pares e geral, responda cada pergunta individualmente (um valor por vez). ')
console.log('valores negativos serão desconsiderados.')
console.log('digite 0 para encerrar o programa. ')
function estruturado1() {
do {
    console.log(a=pacote.questionFloat('informe um valor  '));
    i++
    if (a>0 && a%2==0) {
        pa++;
    }
    if (a>0 && a%2>=1) {
        im++;
    }
    if (a>0 && a%2==0) {
        pam=pam+a;
    }
    if (a>0) {
        soma+=a;
    }
    if (a>0) {
        tot++
    }
}
while(a<0 || a>0)
}
estruturado1();
console.log('a quantidade de números pares são: '+pa)
console.log('a quantidade de números ímpares são: '+im)
console.log('a média dos valores pares é: '+ (pam/tot).toFixed(2))
console.log('a média geral dos valores é: '+(soma/tot).toFixed(2))
console.log('fim do programa')