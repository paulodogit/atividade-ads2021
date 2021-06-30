//digite o raio desejado -> R² = ?
//leia o valor do pi -> pi = 3.14
//leia o valor em graus de uma pizza -> g = 360°
//calcule a área
//escreva o resultado
console.log("")
console.log("----Calcule a area de uma pizza.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o raio da pizza  ')
function pizza(n1) {
    return (3.14*a)**2
}
console.log('a área da pizza é: '+pizza(a).toFixed(2)+ ' cm²')