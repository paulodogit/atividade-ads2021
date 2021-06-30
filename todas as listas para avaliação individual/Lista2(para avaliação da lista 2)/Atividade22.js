//informe três valores
//calcule
console.log("")
console.log("----Calcule o salário de um funcionario e mostre o valor antigo do salário, o atual e a diferença.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o salario do funcionario  ')
b=pacote.questionFloat('informe o cargo do funcionario, sendo 1 para gerente, 2 para engenheiro, 3 para tecnico ou qualquer para qualquer outro cargo  ')

function salario(){
    if (b==1) {
        console.log(`o antigo salário do funcionário era: R$:${a}, o novo salário do funcionário é: R$:${(a*0.10)+a}, a diferença entre os salários é: R$:${((a*0.10)+a)-a}`)
    } else if (b==2) {
        console.log(`o antigo salário do funcionário era: R$:${a}, o novo salário do funcionário é: R$:${(a*0.20)+a}, a diferença entre os salários é: R$:${((a*0.20)+a)-a}`)
    } else if (b==3) {
        console.log(`o antigo salário do funcionário era: R$:${a}, o novo salário do funcionário é: R$:${(a*0.30)+a}, a diferença entre os salários é: R$:${((a*0.30)+a)-a}`)
    } else if (b<0 || b>3) {
        console.log(`o antigo salário do funcionário era: R$:${a}, o novo salário do funcionário é: R$:${(a*0.40)+a}, a diferença entre os salários é: R$:${((a*0.40)+a)-a}`)
    } 
}
salario();