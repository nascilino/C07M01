const prompt = require('prompt-sync')();
var sleep = require('sleep')();
var vitorias = (0);
var continuar = 's';
var derotas = (0);
var empates = (0);

inicio()
function inicio(){
console.log('            Bem vindo vamos testar sua sorte        ');
var rodadas = +prompt('         quantas fez voce vai perder para mim? kkk ')
for(let x = 0; x < (rodadas); r++){
 r = x++
    game ()
    
}
 
}




function game(){
  
    let mao = +prompt('Escolha 1 = PEDRA, 2 =  PAPEL e 3 = TESOURA');
    let teste = Math.floor(Math.random() * 3 + 1)
  
  if (mao === 1 && teste === 2) {derotas++;
      console.log("You Lose");
      sleep.sleep(1)
    } else if (mao === 1 && teste === 1) {
      empates++;console.log('draw');
      sleep.sleep(1)
    } else if (mao === 1 && teste === 3) {
      vitorias++;
      console.log("You Win!!!");
      sleep.sleep(1)
    } else if (mao === 2 && teste === 1) {
      vitorias++;
      console.log("You Win!!! ");
      sleep.sleep(1)
    } else if (mao === 2 && teste === 1) {
      vitorias++;
      console.log("You Win!!!  ");
      sleep.sleep(1)
    } else if (mao === 2 && teste === 2) {
      empates++;
      console.log("Draw");
      sleep.sleep(1)
    } else if (mao === 2 && teste === 3) {
      console.log("You Lose ");
      sleep.sleep(1)
    } else if (mao === 3 && teste === 1) {
      console.log("You Lose ");
      sleep.sleep(1)
    } else if (mao === 3 && teste === 2) {
      vitorias++;
      console.log("You Win!!!  ");
      sleep.sleep(1)
    } else if (mao === 3 && teste === 3) {
      empates++;
      console.log("Draw");
      sleep.sleep(1)
    }
    
  }
  result()



 repit()

function repit(){
let novo = prompt('jogar novamente S/N')
if (novo === 's'|| novo ==='S'){
inicio();repit();result()}
else{console.log('FIM!')}
}

function result(){

console.log();
console.log("Voce venceu " +vitorias + " rodadas");
console.log("Foram " +empates + " empates")
console.log("Voce perdeu " +derotas + " rodadas");
console.log()

if(vitorias > derotas && vitorias > empates){ 
console.log("                Vocé é o grande campeão");
}
else if(derotas > vitorias && derotas > empates){
  console.log("              ♪Tente outra vez♪");
}
else if(empates > vitorias && empates > derotas){
  console.log("        Você e quase tão bom quanto EU");
}
}
