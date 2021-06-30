

pacote=require("readline-sync")
i=0
console.log('nesse programa mostraremos a tabuada de um valor que você informará. ')
console.log('o número informado deve estar entre 1-10 ou dará erro. ')
a=pacote.questionFloat('informe um valor de 0 a 10  ')
function variavel1() {
for (i=0;i<11;i++) {
    if (a>0 && a<=10) {
        console.log(`${i} X ${a} = ` + (i*a))
    }
}
if (a<1 || a>10) {
    console.log('o número digitado não está entre 1-10!')
}
}
variavel1();
console.log('fim do programa')