//Verifique e mostre se um número é perfeito
console.log("")
console.log("----nesse programa iremos verificar se o número informado é ou não um número perfeito.----");
console.log("")

pacote=require("readline-sync")
numero=[pacote.questionFloat("informe o numero inteiro positivo  ")]
i=0
soma=0
function perfeito1() {
for (i=1; i<numero; i++) {
    if (numero%i==0) {
        console.log(soma+=i)
    }
}
if (soma==numero) {
    console.log(numero + " é um número perfeito")
} else {
    console.log(numero + ' não é um número perfeito')
}
}
perfeito1();
console.log('fim do programa')