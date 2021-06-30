//leia o salário minimo -> sm = R$ 1100
//leia o salário de um funcionario -> sf = R$ 1650
//calcule
//escreva a quantidade de salário minimo que esse funcionario recebe
console.log("")
console.log("----Calcule e mostre quanto salário minímo um funcionario ganha.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor do salario minimo  ')
b=pacote.questionFloat('informe o valor do salario do funcionario  ')
function salario(n1,n2) {
    return (n2/n1)
}
console.log('o total de salários mínimos que o funcionário ganha é: '+salario(a,b).toFixed(2))