//mostre os 15 valores de 0 a 15
//mostre-os maior e menor entre os números
//mostre o resultado
console.log("")
console.log("----Nesse programa iremos comparar 15 valores e dizer o maior e o menor entre eles..----");
console.log("")

pacote=require("readline-sync")
console.log('nesse programa iremos ler 15 valores que você nos informará e mostraremos o menor e o maior deles.  ')
console.log('responda de forma individual cada pergunta (um valor por vez).  ')
real1=pacote.questionFloat("informe o primeiro numero real  ")
real2=pacote.questionFloat("informe o segundo numero real  ")
real3=pacote.questionFloat("informe o terceiro numero real  ")
real4=pacote.questionFloat("informe o quarto numero real  ")
real5=pacote.questionFloat("informe o quinto numero real  ")
real6=pacote.questionFloat("informe o sexto numero real  ")
real7=pacote.questionFloat("informe o setimo numero real  ")
real8=pacote.questionFloat("informe o oitavo numero real  ")
real9=pacote.questionFloat("informe o nono numero real  ")
real10=pacote.questionFloat("informe o decimo numero real  ")
real11=pacote.questionFloat("informe o decimo primeiro numero real  ")
real12=pacote.questionFloat("informe o decimo segundo numero real  ")
real13=pacote.questionFloat("informe o decimo terceiro numero real  ")
real14=pacote.questionFloat("informe o decimo quarto numero real  ")
real15=pacote.questionFloat("informe o decimo quinto numero real  ")

var nreal=[real1, real2, real3, real4, real5, real6, real7, real8, real9, real10, real11, real12, real13, real14, real15]
nreal.sort(function (a,b) {
    return a-b;
})
i=1

for(i=1; i<2; i++) {
    console.log("o maior número é: "+ nreal[14])
    console.log("o menor número é: "+ nreal[0])
}
console.log("fim do programa")
