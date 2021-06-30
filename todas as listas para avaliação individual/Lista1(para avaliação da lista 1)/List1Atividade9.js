//leia o tamanho da camiseta pequeno -> p
//leia o tamanho da camiseta média -> m
//leia o tamanho da camiseta grande -> g
//leia o valor da camisa pequena -> vcp = R$ 10.00
//leia o valor da camisa média -> vcm = R$ 12.00
//leia o valor da camisa grande -> vcg = R$ 15.00
console.log("");
console.log("----Calcule quanto será o valor arrecadado de vendas de uma determinada loja de camisetas.----");
console.log("");

pacote=require('readline-sync')
a=pacote.questionFloat('informe o total de camisetas pequenas vendidas  ')
b=pacote.questionFloat('informe o total de camisetas medias vendidas  ')
c=pacote.questionFloat('informe o total de camisetas grandes vendidas  ')
function camiseta(n1,n2,n3) {
    return (n1*10)+(n2*12)+(n3*15)
}
console.log('o valor arrecadado é: R$:'+ camiseta(a,b,c))