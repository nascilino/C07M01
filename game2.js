const prompt = require('prompt-sync')();

var listaJogador=[];
  var rodadas = +prompt("Digite quantas rodadas vão jogar: ");
  var jogadores = +prompt("Digite quantos jogadores vão jogar: ");
    for (var i=0; i<jogadores; i++){
        var jogador={};
        var jogadas=[];     
        jogador.nome = prompt (`Digite o nome do ${i+1}º jogador: `);
        for (var x=0;x<rodadas;x++){
        jogadas.push(Math.floor(Math.random()*6)+1);
        jogador.jogada= jogadas;
        listaJogador.sort((a,b) => b.jodada - a.jogada)
        }
        listaJogador.push(jogador);
               
        }
        console.log(listaJogador)
        
  
