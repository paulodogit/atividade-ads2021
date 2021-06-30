console.log('---- Nesse programa iremos calcular quanto tempo leva para um material com massa x chegar a massa inferior a 0.5g.----')

pacote=require("readline-sync")
ma=pacote.questionFloat("informe a massa inicial do material  ")
ts=0
i=0
for(i=ma;i>0.5;i=i/2) {
    if (i>0.5) {
        console.log(ts=ts+50)
    }
}
tm=ts/60
th=tm/60
console.log("a massa inicial era: " + ma+"g")
console.log("a massa final é: " + i.toFixed(2)+"g")
console.log("o tempo total em segundos é: " +ts.toFixed(2)+"s")
console.log("o tempo total em minutos é: " + tm.toFixed(2)+"min")
console.log("o tempo total em horas é: " + th.toFixed(2)+"h")
console.log('fim do programa')