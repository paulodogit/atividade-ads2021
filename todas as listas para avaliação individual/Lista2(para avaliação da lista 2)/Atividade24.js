//informe um código do seu pedido -> cod = ?
//informe a quantidades -> quant = ?
//calcule
//mostre o valor total a ser pago por aquele lanche
console.log("")
console.log("----Calcule o valor a ser pago pelo lanche de acordo com o código.----");
console.log("código 100= cachorro quente (R$:1.10), código 101= bauru simples (R$:1.30), código 102= bauru c/ovo (R$:1.50),")
console.log('código 103= Hambúrguer (R$:1.10), código 104= Cheeseburguer (R$:1.30), código 105= refrigerante(R$:1.00).')
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o codigo do item pedido  ')
b=pacote.questionFloat('informe a quantidade pedida desse item  ')

function codigo(){
    if (a==100) {
        console.log('o total a ser pago pelo pedido é: R$:'+(b*1.10))
    } else if (a==101) {
        console.log('o total a ser pago pelo pedido é: R$: '+(b*1.30))
    } else if (a==102) {
        console.log('o total a ser pago pelo pedido é: R$: '+((b*1.50)))
    } else if (a==103) {
        console.log('o total a ser pago pelo pedido é: R$: '+((b*1.10)))
    } else if (a==104) {
        console.log('o total a ser pago pelo pedido é: R$: '+((b*1.30)))
    } else if (a==105) {
        console.log('o total a ser pago pelo pedido é: R$: '+((b*1.00)))
    } else {
        console.log('ERRO, pois o código informado é invalido.')
    }
}
codigo();