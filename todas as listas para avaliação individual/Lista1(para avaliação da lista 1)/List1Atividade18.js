//leia o nome de uma empresa -> ne = Hipotheticus
//leia o salário bruto
//leia o salário liquido
//calcule
//escreva o resultado desconciderando os 10%
console.log("")
console.log("----Calcule o salário bruto e o liquído de um determinado funcionario.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de horas normais trabalhadas  ')
b=pacote.questionFloat('informe o total de horas extras trabalhadas  ')
function salario(n1,n2) {
    return (n1*10)+(n2*15)
}
console.log('o salário bruto é: R$:'+ salario(a,b))
console.log('o salário líquido é: R$:'+((salario(a,b))-(salario(a,b)*0.10)))