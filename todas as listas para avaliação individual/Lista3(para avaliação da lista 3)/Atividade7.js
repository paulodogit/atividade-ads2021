//mostre os números de 1000 a 1999
//calcule e mostre os números multiplos de 11 e que o resultado seja 5
console.log("")
console.log("----Calcule e mostre os números que dão resto 5.----");
console.log("")

i=0
function resto1() {
for(i=1000;i<1999;i++) {
    if(i%11==5) {
        console.log(i)
    }
}
}
resto1();
console.log("o programa acabou de mostrar os números entre 1000-1999 que divididos por 11 dão resto 5. ")
console.log('fim do programa')