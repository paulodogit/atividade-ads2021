console.log("")
console.log("----Calcule e mostre os primeiros números primos.----");
console.log("")

var readline = require("readline-sync");
var num = 0;
var contador = 0;


    num = parseInt(readline.question("Informe um numero: "));

function primeiroNum(){
    for(i = 1; i <= num; i ++){
        if(num % i == 0){
            contador ++;
        }
    }
    if(contador == 2){
        console.log(num + " é primo");
    }else{
        console.log(num + " não é primo");
    }
}
primeiroNum();
    
    var num = 0;
    var contador = 0;
    
    console.log("")
    num = parseInt(readline.question("Informe um numero: "));

function segundoNum(){
    for(i = 1; i <= num; i ++){
        if(num % i == 0){
            contador ++;
        }
    }
    if(contador == 2){
        console.log(num + " é primo");
    }else{
        console.log(num + " não é primo");
    }
}
segundoNum();
    
    var num = 0;
    var contador = 0;
    
    console.log("")
    num = parseInt(readline.question("Informe um numero: "));

function terceiroNum(){
    for(i = 1; i <= num; i ++){
        if(num % i == 0){
            contador ++;
        }
    }
    if(contador == 2){
        console.log(num + " é primo");
    }else{
        console.log(num + " não é primo");
    }
}
terceiroNum();