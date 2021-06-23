//calcule a seguinte soma -> soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50
//mostre o resultado
console.log("")
console.log("----Calcule e mostre a soma.----");
console.log("")

den=1
div=1
soma=0.0
function soma1(){
for (div=1;div<=50;div++) {
    console.log(den+'/'+div)
    den=den+2
    soma+=(den/div)
}
console.log('soma='+(soma).toFixed(2))
console.log('nesse programa fizemos com que o denominador crescesse +2 enquanto o dividor crescesse +1.  ')
console.log('fim do programa.')
}
soma1();