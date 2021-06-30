

console.log('nesse programa iremos mostrar a soma, o produto e a média dos conjuntos de números informados. ')
pacote=require("readline-sync")
a=0
b=0
c=0
i=0
soma=0
produto=1
media=0
console.log('informe os números em ordem crescente (são 3 perguntas individuais) para que seja calculado a soma, produto e média ou digite em ordem decrescente para finalizar')

function conjunto1() {
do {
    console.log(a=pacote.questionFloat("informe o primeiro numero  "));
    console.log(b=pacote.questionFloat("informe o segundo numero  "));
    console.log(c=pacote.questionFloat("informe o terceiro numero  "));
    i++;
    if(c>b && c>a) {
        console.log('soma = '+(soma+=a+b+c))
    }
    if (c>b && c>a) {
        console.log('produto = '+(produto*=a*b*c))
    }
    if(c>b && c>a) {
        console.log('média = '+(media+=a+b+c)/3)
    }
}
while (c>b && c>a)
}
conjunto1();
console.log('fim do programa')