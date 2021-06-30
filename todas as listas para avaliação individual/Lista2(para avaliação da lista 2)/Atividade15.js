//informe o número da sua matrícula -> matrícula = ?
//informe o seu nome completo -> nome = ?
//informe o seu gênero -> gênero
//informe seu curso -> "BSI", "EE", "EM", "EC", "AQ"
//mostre o coeficiente desse aluno
console.log("")
console.log("----Informações pessoais para cadastro.----");
console.log('nota: BSI= Bacharelado em Sistema da Informação, EE=Engenharia Elétrica, EM= Engenharia Mecânica, EC=Engenharia Civil, AQ= Arquitetura')
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o numero da matricula do aluno com cinco digitos  ')
b=pacote.question('informe o nome do aluno  ')
c=pacote.questionFloat('informe o genero do aluno sendo 1 para  F ou 2 para M  ')
d=pacote.questionFloat('informe o curso do aluno, digite 1 para BSI, 2 para EE, 3 para EM, 4 para EC, 5 para AQ  ')
e=pacote.questionFloat('informe o coeficiente de rendimento do aluno  ')
console.log('a matrícula do aluno é: '+a)
console.log('o nome do aluno é: '+b)

function cadastro() {
    if(c==1) {
        console.log('o gênero do aluno é: Feminino')
    } else if(c==2) {
        console.log('o gênero do aluno é: Masculino')
    } else {
        console.log('gênero não identificado')
    }
    if (d==1) {
        console.log('o curso do aluno é: Bacharelado em Sistemas da Informação (BSI)')
    } else if (d==2) {
        console.log('o curso do aluno é: Engenharia Elétrica (EE)')
    } else if (d==3) {
        console.log('o curso do aluno é: Engenharia Mecânica (EM)')
    } else if (d==4) {
        console.log('o curso do aluno é: Engenharia Civil (EC)')
    } else if (d==5) {
        console.log('o curso do aluno é: Arquitetura (AQ)')
    } else {
        console.log('curso não identificado')
    }
    if (e>=0 && e<=3) {
        console.log('o rendimento do aluno é preocupante')
    } else if (e>=4 && e<=5) {
        console.log('o rendimento do aluno é necessita melhoras')
    } else if (e>=6 && e<=7) {
        console.log('o rendimento do aluno é regular')
    } else if (e>=8 && e<=9) {
        console.log('o rendimento do aluno é bom')
    } else if (e==10) {
        console.log('o rendimento do aluno é excelente')
    } else {
        console.log('rendimento não identificado, pois o rendimento informado é negativo ou acima de 10.')
}
}
cadastro();