//O usuario informe um determinado número
//finalize quando o usuario digitar 0
console.log("")
console.log("----nesse programa iremos calcular o produtos dos números que serão informados a seguir.----");
console.log('quando não quiser mais acrescentar valores, digite 0 para encerrar. ')
console.log("")

pacote=require("readline-sync")

a=0
i=0
prod=1
function produto1(){
do {
    console.log(a=pacote.questionFloat('digite um numero a ser multiplicado entre os demais  '  ));
    i++;
    if(a>0 || a<0) {
        console.log('produto= ' +(prod*=a))
    }
}
while (a>0 || a<0)
}
produto1();
console.log("programa encerrado.")