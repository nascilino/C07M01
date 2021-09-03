const prompt = require('prompt-sync')();

var clientes =[]
var nome = {}
function inclusao(){
    nome.usuario = prompt("Qual o nome que deseja incluir ? ");
    let idade = prompt("Qual a sua idade?");
    for(let x = 0; x< clientes;x++){
         clientes.push(nome); 
    }
    
    console.log(clientes)
    console.log(`Olá ${clientes}, Voce esta incluso no sistema`);
    let voltar = prompt("presione M para voltar ao menu ou S para sair")
    if (voltar === "M"){(menu())}
    else if (voltar === "m"){(menu())}
    else if (voltar === "s"){(sair())}
    else if (voltar === "S"){(sair())}
    else if (voltar === "c"){(inclusao())}
      }
  

  function alteracao(){
    clientes = prompt("Qual o nome que deseja alterar ? ");
    let nNome = prompt("Qual o novo Nome");
    console.log('O nome do '+nome+' foi alterado para '+nNome+'.' );
    let voltar = prompt("presione M para voltar ao menu ou S para sair")
    if (voltar === "M"){(menu())}
    else if (voltar === "m"){(menu())}
    else if (voltar === "s"){(sair())}
    else if (voltar === "S"){(sair())}
  }
  
  function sair(){
    console.log('obrigado por usar o sistema')
  }
  
  function excluir(){
    let nome = prompt('Qual nome deseja excluir')
    console.log('ok o '+nome+ ' foi excluido')
    let voltar = prompt("presione M para voltar ao menu ou S para sair")
    if (voltar === "M"){(menu())}
    else if (voltar === "m"){(menu())}
    else if (voltar === "s"){(sair())}
    else if (voltar === "S"){(sair())}
  
  }
  
  function consulta(){
    let nome = prompt('Qual nome deseja consultar')
    console.log('ok o '+nome+ ' esta no sistema')
    let voltar = prompt("presione M para voltar ao menu ou S para sair")
    if (voltar === "M"){(menu())}
    else if (voltar === "m"){(menu())}
    else if (voltar === "s"){(sair())}
    else if (voltar === "S"){(sair())}
  
  }
  
  function menu(){
    console.log('Cadastro de Clientes')
    console.log('0 – Fim');
    console.log('1 - Inclui');
    console.log('2 - Altera');
    console.log('3 - Exclui');
    console.log('4 - Consulta');
  let opcao = +prompt("Digiter uma opçao")
  if (opcao === 0){sair()}
  else if (opcao === 1){(inclusao())}
  else if (opcao === 2){(alteracao())}
  else if (opcao === 3){console.log('Cadastro deletado')}
  else if (opcao === 4){console.log('Digide o cadastro para consultar')}
  else{console.log("Opção Invalida")}
    console.log()
  }
  menu()
