console.log("")
console.log("---------Instrução---------");
console.log("Existem três listas de exercicios.");
console.log("Escolha uma lista. Feito isto voce deve escolher qual questão você");
console.log("quer resolver. As atividades de cada lista variam.")

console.log("");

var reset = 0;
var prox = 1;
var fim = 2;
console.log("Digite " + prox + " para PROXIMO, " + fim + " para SAIR e " + reset + " para resetar.");
console.log('---- Dentro das listas, digite qualquer valor negativo para encerrar o programa.----')
console.log('---- Dentro das opções de questões, escolha qualquer valor acima de para voltar as opções de lista.----')

pacote=require('readline-sync')
opc=pacote.questionFloat('o que voce deseja fazer?  ')
if (opc==1) {
    invocar=require('./ListaPrincipal')
} else {
    console.log('programa encerrado.')
}