//calcule a soma de todos os números que são multiplos de 3 que está entre o 1 e o 500
console.log("")
console.log("----Calcule e mostre a efetuação dos números ímpares que são divisiveis por 3.----");
console.log("")
num=0
soma=0
function soma12() {
for(num=1;num<=500;num++) {
   if (num%2>=1 && num%3==0) {
      soma+=num
   }
}
}
soma12();
console.log('a soma dos números é: '+soma)
console.log('nesse programa calculamos a soma de todos os números ímpares que são múltiplos de 3 presentes no conjunto 1-500. ')
console.log('fim do programa')