//calcule a seguinte soma -> soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50
//mostre o resultado
console.log("")
console.log("----Calcule e mostre a soma.----");
console.log("")

soma=0.0
numerador=1
function soma1(){
for (i=1;i<=50;i++) {
    soma+=(numerador/i)
    console.log(`${numerador}/${i}`)
    console.log(`soma acumulada: ${soma}`)
    numerador+=2
}
console.log((soma).toFixed(2))
}
soma1();