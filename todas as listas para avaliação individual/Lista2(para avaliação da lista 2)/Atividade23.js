//informe o saldo médio -> sm = ?
//calcule
//mostre o saldo médio
//mostre o valor do crédito
console.log("")
console.log("----Calcule e mostre o saldo e o crédito de um cliente.----");
console.log('para saldo de 0-200=(sem acréscimo), de 201-400=(20%), de 401-600=(30%), de 601 em diante=(40%).')
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o saldo medio do cliente  ')

function saldo(){
    if (a<=0 || a<=200) {
        console.log(`o saldo médio do cliente é: ${a}, o crédito a ser disponibilizado ao cliente é: R$:`+(a))
    } else if (a>=201 && a<=400) {
        console.log(`o saldo médio do cliente é: ${a}, o crédito a ser disponibilizado ao cliente é: R$:`+((a*0.20)+a))
    } else if (a>=401 && a<=600) {
        console.log(`o saldo médio do cliente é: ${a}, o crédito a ser disponibilizado ao cliente é: R$:`+((a*0.30)+a))
    } else if (a>=601) {
        console.log(`o saldo médio do cliente é: ${a}, o crédito a ser disponibilizado ao cliente é: R$:`+((a*0.40)+a))
    }
}
saldo();