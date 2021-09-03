const prompt = require('prompt-sync')();
var nun = +prompt('digite o numero de jogadores: ')// aqui vamos pegar o numero de jogadores que usaremos no for nao variavel nun
//var nome1 = {nome: '',numero:'',}
var i = 0
for( i = 0; i < (nun); i++){
    var jogo = {
    nome: "Jogador" + (i + 1),
    numero: Math.floor(Math.random() * 6 + 1),
    }
    console.log(jogo);
    
}

