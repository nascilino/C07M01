//projetp dice game
const prompt = require('prompt-sync')();
var resultados = []
var jogador={};
var jogadas=[];
var rodadas = +prompt('Qantas rodadas vamos jogar: ')
var jogadores = +prompt("Digite quantos jogadores vão jogar: ");
    for (i = 0; i < jogadores;i++){
    jogador.nome = prompt(`nomer do ${i+1}º jogador: `)
    for (var x=0;x<rodadas;x++){
        jogadas.push(Math.floor(Math.random()*6)+1);
        jogador.jogada = jogadas;
        resultados.push(jogador);
    }
    
    //console.log(resultados)
}
console.log(resultados)
console.log(jogador.jogada+" teste2 ")
console.log(jogador.nome+" teste01 ")
console.log(jogadas[1])
//console.log(resultado.nome)
3641-5209