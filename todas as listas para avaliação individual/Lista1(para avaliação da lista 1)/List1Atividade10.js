//digite dois números para dois pontos -> p1 = (1.3)
//digite dois números para dois pontos -> p2 = (5.6)
console.log("")
console.log("----Calcule a distância de um determinado ponto do plano cartesiano.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor de x1  ')
b=pacote.questionFloat('informe o valor de y1  ')
c=pacote.questionFloat('informe o valor de x2  ')
d=pacote.questionFloat('informe o valor de y2  ')
function cartesiano(n1,n2,n3,n4) {
    return Math.sqrt(((n3-n1)**2)+((n4-n2)**2))
}
console.log('a distância entre os dois pontos é: '+ cartesiano(a,b,c,d).toFixed(2))