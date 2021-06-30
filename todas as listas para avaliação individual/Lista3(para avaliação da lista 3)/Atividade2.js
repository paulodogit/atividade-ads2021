//mostrando a tabuada de 0 a 9 usando o laço de repetição
//mostre o resultado
console.log("")
console.log("----Calcule a tabuada.----");
console.log("")

pacote=require("readline-sync")
console.log('nesse programa iremos mostrar a tabuada do 0 ao 9 do número que você irá nos informar.  ')
n=pacote.questionFloat("de qual numero deseja que seja feito a tabuada?")
i=0
function tabuada1(){
while(i<=10) {
    console.log(n + " x "+ i + " = "+ (n*i));
    i++
}
console.log('fim do programa')
}
tabuada1();