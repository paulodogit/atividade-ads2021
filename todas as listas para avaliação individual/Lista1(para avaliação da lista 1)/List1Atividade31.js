//digite seu nome -> nome = ?
//digite seu peso -> peso = ?
//calcule
//escreva o peso se a pessoa emagrecer 20%
//escreva o peso se a pessoa engordar 15%
console.log("")
console.log("----Calcule o peso de um pessoa e mostre-a engordando 15% e emagrendo 20%.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o peso da pessoa  '  )
function peso(n1) {
    return n1
}
console.log('o peso da pessoa engordando 15% é: '+((peso(a)*0.15)+peso(a))+ ' kg')
console.log('o peso da pessoa se emagrecer 20% é: '+((peso(a))-(peso(a)*0.20))+ ' kg')