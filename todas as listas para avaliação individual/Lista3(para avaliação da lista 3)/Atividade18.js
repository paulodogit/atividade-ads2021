console.log("")
console.log("----Calcule e mostre a MAIOR e a MENOR altura do grupo.----");
console.log("")

console.log('nesse programa iremos mostrar a maior e a menor altura informada. ')
pacote=require("readline-sync")
console.log("serão perguntados 15 valores individuais, digite um valor de cada vez para que possamos dizer qual o maior o e menor entre eles.  ")
a0=pacote.questionFloat("informe a primeira altura  ")
a1=pacote.questionFloat("informe a segunda altura  ")
a2=pacote.questionFloat("informe a terceira altura  ")
a3=pacote.questionFloat("informe a quarta altura  ")
a4=pacote.questionFloat("informe a quinta altura  ")
a5=pacote.questionFloat("informe a sexta altura  ")
a6=pacote.questionFloat("informe a setima altura  ")
a7=pacote.questionFloat("informe a oitava altura  ")
a8=pacote.questionFloat("informe a nona altura  ")
a9=pacote.questionFloat("informe a decima altura  ")
a10=pacote.questionFloat("informe a decima primeria altura  ")
a11=pacote.questionFloat("informe a decima segunda altura  ")
a12=pacote.questionFloat("informe a decima terceira altura  ")
a13=pacote.questionFloat("informe a decima quarta altura  ")
a14=pacote.questionFloat("informe a decima quinta altura  ")
at=[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14]
at.sort(function(a,b) {
    return a-b
})
console.log('o menor número é: ' + at[0])
console.log('o maior número é: ' + at[14])
console.log('fim do programa')