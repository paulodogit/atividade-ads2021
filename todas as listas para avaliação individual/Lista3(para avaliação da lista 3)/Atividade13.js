

console.log('nesse programa iremos mostrar a maior média, a menor e a da turma. ')
console.log('informe as médias individualmente(uma por vez) ou digite uma média negativa para finalizar. ')
pacote=require("readline-sync")
i=-1
a=0
mai=a
men=10000000000000000000000000000000000000000000000
med=0
function alunos1() {
do {
    console.log(a=pacote.questionFloat('informe a media  '));
    i++;
    if (a>=0) {
        if (a>mai) {
            mai=a;
        }
    }
    if (a>=0) {
        if (a<men) {
            men=a
        }
    }
    if (a>=0) {
        med+=a;
        
    }
}
while (a>=0)
}
alunos1();
console.log('menor média: '+men)
console.log('maior média: '+mai)
console.log('média da turma: '+(med/i))
console.log('fim d programa')