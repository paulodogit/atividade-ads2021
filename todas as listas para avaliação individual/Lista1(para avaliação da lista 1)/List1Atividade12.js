//ler o salário de um funcionario -> sl = ??
//ler o aumento de 15% = 0,15%
//ler o desconto de 8% = 0,08%
//calcular o aumento junto com o salario -> sl + 0,15
//calcular o desconto do salario -> sl - 0,08
//escreva o salario inicial
//escreva o salario com o almento
//escreva o salario final
console.log("")
console.log("----Calcule o salário de um determinado funcionario com aumento e descontos.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o salario do funcionario  ')
function salario(n1) {
    return (n1*0.15)+n1
}
console.log('o salário inicial é: '+a)
console.log('o salário com o aumento é: '+salario(a).toFixed(2))
console.log('o salário com desconto é: '+(salario(a)-(salario(a)*0.08)).toFixed(2))