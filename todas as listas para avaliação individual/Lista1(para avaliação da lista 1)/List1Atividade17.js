//ler a temperatura em Celsius
//escreva a mensagem
//transformar Celsius para Fahrenheit -> C/5 = F-32/9
console.log("")
console.log("----Calcule e transforme Celsius em Fahrenheit.-----");
console.log("")

pacote=require("readline-sync")
a=pacote.questionFloat('informe uma temperatura celsius para converter em fahrenheit  ')
function temperatura(n1) {
    return (a*9/5)+32
}
console.log(' a temperatura em fahrenheit é: '+temperatura(a))