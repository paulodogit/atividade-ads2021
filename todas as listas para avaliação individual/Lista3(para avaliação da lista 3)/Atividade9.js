//mostre os termos em sequencia

console.log("")
console.log("Mostre a sequência de Fibonacci. ");
console.log("")

console.log('nesse programa iremos mostrar a sequência de Fibonacci. ')
pacote=require("readline-sync")
n=pacote.questionFloat("quantos termos voce quer mostrar? ")
t1=0
t2=1
console.log(t1)
console.log(t2)
cont=3
function fibonacci1() {
while(cont<=n) {
    t3=t1+t2
    t1=t2
    t2=t3
    console.log(t3)
    cont+=1
}
}
fibonacci1();
console.log('fim do programa')