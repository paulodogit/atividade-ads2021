//leia a formúla do calculo -> Tg(x) = H/M
//leia a altura do prédio -> H = ??
//leia os metros da distância entre o prédio e o grau -> M = ??
//leia o grau -> G = ??
//calcule a altura do prédio
//escreva o resultado
console.log("")
console.log("----Calcule a altura de um determinado prédio.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o tamanho da sombra do predio  ')
b=pacote.questionFloat('informe o tamanho da sombra da pessoa  ')
c=pacote.questionFloat('informe o tamanho da altura da pessoa  ')
function predio(n1,n2) {
    return n1/n2
}
console.log('a altura do prédio é: '+(predio(a,b)*c).toFixed(2)+ ' metros')