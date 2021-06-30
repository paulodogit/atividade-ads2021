//formula do calculo -> A = D * d / 2
console.log("")
console.log("----Calcule a area de um trapézio.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o valor da base maior  ')
b=pacote.questionFloat('informe o valor da base menor  ')
c=pacote.questionFloat('informe o valor da altura  ')
function trapezio(n1,n2,n3) {
    return (((n1+n2)*n3)/2)
}
console.log('a área do trapézio é: '+trapezio(a,b,c)+ ' cm²')