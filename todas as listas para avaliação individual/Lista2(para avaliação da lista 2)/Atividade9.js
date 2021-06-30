//infome a altura do triângulo -> H = ?
//informe a base do triângulo -> b = ?
//função para esse calculo -> A = b*H / 2

const { questionFloat } = require("readline-sync");

//calcule a área de um triângulo
console.log("")
console.log("----Calcule a área de um triângulo.----");
console.log("")

//informe a altura e a base//
pacote = require("readline-sync");
a=pacote=questionFloat("Informe a altura de um triangulo: ");
b=pacote=questionFloat("Informe a base de um triangulo: ");

function dimensao (n1,n2){
    return (n1*n2/2)
}
console.log("A área de um triângulo é: " + dimensao(a,b) + ' cm²');