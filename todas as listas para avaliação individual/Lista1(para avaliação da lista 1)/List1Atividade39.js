//ler o nome -> nome = João
//ler o salário do João -> sl = R$ 1200,00
//ler o valor da conta 1 -> c1 = R$ 200,00
//ler o valor da conta 2 -> c2 = R$ 120,00
//leia a porcentagem da multa das duas contas -> pm = 2%
//calcule e mostre quantos restará do salário de João
console.log("")
console.log("----Calcule quanto restará seu salário.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('nesta questao mostraremos quanto do salario de Joao restou apos pagar duas contas com atraso, digite qualquer numero para prosseguir.  ')
console.log('salário de João: R$:1200.00')
console.log('conta 1= R$:200.00 ')
console.log('conta 2= R$:120.00 ')
console.log('juros a ser aplicado em cada conta atrasada: 2%')
var Sal=1200.00
var C1=200.00
var C2=120.00
var Pag=C1*0.02+C2*0.02+C1+C2
var Sobra=Sal-Pag
console.log("o que sobrou do salário de João foi: R$:"+ Sobra)
