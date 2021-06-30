//calcule o cateto de um triângulo
//escreva o resultado da hipotenusa
console.log("")
console.log("----Calcule o valor da hipotenusa.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor do primeiro cateto  ')
b=pacote.questionFloat('informe o valor do segundo cateto  ')
function hipotenusa(n1,n2) {
    return (Math.sqrt((n1)**2+(n2)**2))
}
console.log('o valor da hipotenusa é: '+hipotenusa(a,b))