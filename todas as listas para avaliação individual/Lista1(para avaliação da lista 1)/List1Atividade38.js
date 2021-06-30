//digite seu nome -> nome = ?
//digite sua ano de nascimento -> an = ?
//digite o ano atual -> aa = ?
//calcule
//mostre a idade em anos
//mostre a idede em mês
//mostre a idade em dias
//mostre a idade em semanas
console.log("")
console.log("----Calcule a idade de uma pessoa em anos, meses, dias e semanas.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o ano de nascimento da pessoa  ')
b=pacote.questionFloat('informe o ano atual  ')
function idade(n1,n2) {
    return (n2-n1)
}
console.log('a idade da pessoa em anos é: '+idade(a,b))
console.log('a idade da pessoa em meses é: '+(idade(a,b)*12))
console.log('a idade da pessoa em semanas é: '+(idade(a,b)*51))
console.log('a idade da pessoa em dias é: '+(idade(a,b))*365)