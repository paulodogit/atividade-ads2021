//digite um salário -> sal = R$ 1100
//leia a comisão de vendas -> com = 4%
//calcule
//escreva o salário final e a comisão
console.log("")
console.log("----Calcule e mostre a comissão e o salário final de um determinado funcionario.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor do salario fixo do funcionario  ')
b=pacote.questionFloat('informe o valor das vendas do funcionario  ')
function comissao(n1,n2) {
    return (n2*0.04)
}
console.log('o total de ganhos por comissão do funcionário é: R$:'+comissao(a,b).toFixed(2))
console.log('o salário final do funcionário é: R$:'+(a+comissao(a,b)).toFixed(2))