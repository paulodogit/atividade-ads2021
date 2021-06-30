//leia o nome de uma pessoa -> nome = ?
//leia a primeira quantidade em litros -> 350 ml
//leia a segunda quantidade em litros -> 600 ml
//leia a terceira quantidade em litos -> 2 L
//calcule a quantidades em litros de refrigerante
//escreva o resultado
console.log('')
console.log('calcule quantos litros um comerciante adquiriu no total.')
console.log('')
pacote=require('readline-sync')
a=pacote.questionFloat('informe quantas garrafas de 350ml foram compradas  ')
b=pacote.questionFloat('informe quantas garrafas de 600ml foram compradas  ')
c=pacote.questionFloat('informe quantas garrafas de 2000ml foram compradas  ')
function refri(n1,n2,n3) {
    return (((n1*350)+(n2*600)+(n3*2000))/1000)
}
console.log('o total de litros comprados são: '+refri(a,b,c).toFixed(2)+ ' L')