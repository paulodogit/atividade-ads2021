//leia o nome de uma Empresa -> nome_ep = ?
//leia X blusas -> blusas = ?
//leia quantos novelor possui -> qnp = ?
console.log("")
console.log("----Calcule quantos novelos de lã são necessarios para fazer 'X' blusas.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe o tanto de blusas feitas com 1 rolo de novelo de la  ')
function confeccao(n1) {
    return 1/n1
}
console.log('o consumo de novelo de lã por blusa é: '+confeccao(a).toFixed(2))