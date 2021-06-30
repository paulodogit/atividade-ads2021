//leia a quantidade de moedas que pedrinho econômizou -> qmpe = ?
//leia cada tipo de moedas que pedrinho tem -> tmp = ?
//calcule
//escreva o resultado
console.log("")
console.log("----Calcule quantas moedas pedrinho economizou.----")
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de moedas de 1 centavo  ')
b=pacote.questionFloat('informe o total de moedas de 5 centavos  ')
c=pacote.questionFloat('informe o total de moedas de 10 centavos  ')
d=pacote.questionFloat('informe o total de moedas de 25 centavos  ')
e=pacote.questionFloat('informe o total de moedas de 50 centavos  ')
function moedas(n1,n2,n3,n4,n5) {
    return ((n1*1)+(n2*5)+(n3*10)+(n4*25)+(n5*50))/100
}
console.log('o total em reais que Pedrinho economizou é: R$:'+moedas(a,b,c,d,e).toFixed(2))