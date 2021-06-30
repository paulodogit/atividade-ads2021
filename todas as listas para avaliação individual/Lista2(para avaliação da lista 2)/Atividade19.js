//informe um valor total de um produto -> vt = 2.300
//minimo de prestação -> prest = 12
//calcule
//se a prestação for maior que 24 prestações adicione 10% de juros
//calcule
//se a prestação for maior que 36 prestações adicione 15% de juros
console.log("")
console.log("----Calcule o valor de cada prestações contendo juros.----");
console.log("de 12x até 23x não é aplicado juros, de 24x-35x (10% de juros), de 36 em diante (15% de juros).")
console.log("o número mínimo de prestações é 12, em caso inferior, dará erro.")
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor total em reais  ')
b=pacote.questionFloat('informe o total de prestacoes  ')
Juros1=0.10
Juros2=0.15

function prestação(){
    if(b<12) {
        console.log('ERRO, pois o número de prestações é inferior a 12.')
    } else {
    if (b>=12 && b<=23) {
        console.log("o valor das prestações ficarão em: R$:"+ (a/b).toFixed(2))
    } else if (b>=24 && b<=35) {
        console.log("o valor das prestações ficarão: R$:"+ (((a*Juros1)+a)/b).toFixed(2))
    } else {
        console.log("o valor das prestações ficarão: R$: "+ (((a*Juros2)+a)/b).toFixed(2))
    }
    }
}
prestação();