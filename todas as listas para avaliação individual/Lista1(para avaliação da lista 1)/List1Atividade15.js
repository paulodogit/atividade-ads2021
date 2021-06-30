//leia o valor total da conta do bar -> vtb = R$ 168.3
//escreva o nome da primeiro pessoa -> p_nome =
//escreva o nome da segunda pessoa -> s_nome =
//escreva o nome da terceira pessoa -> t_nome =
//calcule
//escreva o resultado
console.log("")
console.log("----Calcule a conta do bar e defina quanto cada um vai pagar.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor da conta a ser paga  ')
function conta(n1) {
    return n1
}
console.log('Carlos pagará: '+Math.floor((conta(a)/3)))
console.log('André pagará: '+Math.floor(conta(a)/3))
console.log('Felipe pagará: '+((conta(a)/3)+(conta(a)%3)))