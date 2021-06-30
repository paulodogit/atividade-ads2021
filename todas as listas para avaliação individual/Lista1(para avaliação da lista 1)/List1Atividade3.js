//ler o valor de cada pão -> vp = R$ 0,12
//ler o valor de cada broa -> vb = R$ 1,50
//ler a quantidade de pães -> ps = ??
//ler a quantidade de broas -> br = ??
//calcular 

console.log("");

console.log("----Você deve calcular quanto que o dono arrecadou com a venda dos pães e as broas.----");

console.log("");

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de paes vendidos  ')
b=pacote.questionFloat('informe o total de broas vendidas  ')
function total(n1,n2,n3,n4) {
    return (n1*n2)+(n3*n4)
}
console.log('o total arrecadado é: R$:'+total(a,0.12,b,1.50))
console.log('o total a ser guardado na poupança é: R$:'+total(a,0.12,b,1.50)*0.10)