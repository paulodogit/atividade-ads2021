//calcule e mostre a soma dos números ímpares e pares
console.log("")
console.log("----nesse programa iremos mostrar a soma dos números pares e dos ímpares informados.----");
console.log("")
pacote=require("readline-sync")
a=0
i=0
pa=0
im=0
function inteiro1() {
do {
    console.log(a=pacote.questionFloat("informe qualquer numero a ser somado junto aos seus semelhantes(par ou impar) ou digite um valor acima de 1000 para encerrar o programa"  ));
    i++;
    if (a>1000) {
        console.log("fim do programa")
    } else {
        if(a%2==0) {
            console.log('soma dos pares = '+(pa+=a))
        }
        if(a%2>=1) {
            console.log('soma dos impares = '+(im+=a))
        }
        
    }

}
    while(a<=1000) {
        
    }
}
inteiro1();