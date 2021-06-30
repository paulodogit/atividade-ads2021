//ler o nome da Empresa -> ne = Lanchonete Gostosura
//ler quantos pães você deseja -> pães = ?
//ler 1 fatia de queijo -> fat_q = 50 grama
//ler 1 fatia de presunto -> fat_p = 50 grama
//ler 1 rodela de carne -> rod_car = 100 grama
console.log("")
console.log("----Calcule quantos quilos de queijo, presunto e carne são necessarios para fazer x sanduíches.----");
console.log("")

pacote=require('readline-sync')
a=pacote.questionFloat('informe a quantidade de  sanduiches a fazer  ')
function sandubao(n1) {
    return n1
}
console.log('serão necessários '+(((sandubao(a))*100)/1000).toFixed(2)+ ' Kg de queijo')
console.log('serão necessários '+(((sandubao(a))*50)/1000).toFixed(2)+ ' Kg de presunto')
console.log('serão necessários '+(((sandubao(a))*100)/1000).toFixed(2)+ ' Kg de hambúrguer')