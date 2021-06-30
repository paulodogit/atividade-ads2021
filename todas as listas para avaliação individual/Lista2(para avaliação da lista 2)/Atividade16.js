//informe a temperatura em Celsius -> C = ?
//mostre a temperatura em Fahrenheit
//caso o valor seja invertido
//informe a temperatura em Fahrenheit -> F = ?
//mostre a temperatura em Celsius
console.log("")
console.log("----Calcule e transforme a temperatura de Celsius para Fahrenheit e vise-versa.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe a unidade de medida a ser convertida, sendo 1 para Celsius e 2 para Fahrenheit  ')
b=pacote.questionFloat('informe a temperatura  ')
c=(b-32)*5/9
f=(b*9/5)+32

function temperatura(){

    if (a==1) {
        console.log('a temperatura em Fahrenheit é: '+(f).toFixed(2))
    } else if (a==2) {
        console.log('a temperatura em Celsius é: '+(c).toFixed(2))
    } else {
        console.log('ERRO, pois a unidade informada é inválida.')
    }
}
temperatura();