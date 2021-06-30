

console.log('nesse programa iremos mostrar o total de dias decorridos entre duas datas informadas.  ')
pacote=require("readline-sync")
console.log("as perguntas a seguir perguntarao sobre data, mes e ano da data antiga e recente, responda corretamente para evitar erros (max 30 dias, 12 meses)")
console.log("o ano a ser escolhido deve ser entre 1950 e 1996 ")
dia1=pacote.questionFloat("informe o dia da data antiga  ")
mes1=pacote.questionFloat("informe o mes da data antiga  ")
ano1=pacote.questionFloat("informe o ano da data antiga  ")
dia2=pacote.questionFloat("informe o dia da data recente  ")
mes2=pacote.questionFloat("informe o mes da data recente  ")
ano2=pacote.questionFloat("informe o ano da data recente  ")
if(dia1<=0 || dia1>30 || dia2<=0 || dia2>30) {
    console.log("o programa não pôde ser executado pois alguma instrução não foi seguida corrtamente")
} else if(mes1<=0 || mes1>12 || mes2<=0 || mes2>12) {
    console.log("o programa não pôde ser executado pois alguma instrução não foi seguida corrtamente")
} else if(ano1<1950 || ano2>1996) {
    console.log("o programa não pôde ser executado pois alguma instrução não foi seguida corrtamente")
} else {
    bidia=0
    mesdia=0
    dia=0
for (i=ano1; i<ano2;i++) {
    if (i%4==0) {
        console.log(bidia+=366)
    } else {
        console.log(bidia+=365)
    }
}
for (i=mes1;i<mes2;i++) {
    console.log(mesdia+=30)
}
for (i=dia1;i<dia2;i++) {
    console.log(dia+=1)
}
}
console.log("o total de dias entre as duas datas são: " + (bidia+mesdia+dia))
console.log('fim do programa')