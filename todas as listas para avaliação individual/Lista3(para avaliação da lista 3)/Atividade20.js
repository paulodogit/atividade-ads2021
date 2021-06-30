

pacote=require("readline-sync")
i=0
a=0
cont1=0
cont2=0
cont3=0
cont4=0
console.log('verificaremos quantos valores que você digitar estão em grupos distintos [0-25],[26-50],[51-75],[76-100], responda de forma individual cada pergunta (apenas um valor por vez) ')
console.log('digite um valor negativo para encerrar o programa ')
function conjunto12() {
do {
    console.log(a=pacote.questionFloat('informe um valor  '));
    i++;
    if (a>=0 && a<=25) {
        cont1++;
    }
    if (a>=26 && a<=50) {
        cont2++;
    }
    if (a>=51 && a<=75) {
        cont3++;
    }
    if (a>=76 && a<=100) {
        cont4++;
    }
}
while (a>=0)
}
conjunto12();
console.log('quantidade de valores que se encaixam no grupo[0-25]: '+cont1)
console.log('quantidade de valores que se encaixam no grupo [26-50]: '+cont2)
console.log('quantidade de valores que se encaixam no grupo[51-75]: '+cont3)
console.log('quantidade de valores que se encaixam no grupo[76-100]: '+cont4)
console.log('fim do programa')