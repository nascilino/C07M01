const prompt = require('prompt-sync')();
console.log('Repondas as perguntas a baixo com(S) para sim e N para não');

let contadors = 0;
let contadorn = 0;

let questao1 = prompt('Telefonou para a vítima? (S/N) ');
let q1 = questao1.toUpperCase()
let questao2 = prompt('Esteve no local do crime? (S/N) ');
let q2 = questao2.toUpperCase()
let questao3 = prompt('Mora proximo a vitima? (S/N) ');
let q3 = questao3.toUpperCase()
let questao4 = prompt('Devia a vitima? (S/N) ')
let q4 =questao4.toUpperCase()
let questao5 = prompt('Ja trabalhou com a vitima? (S/N) ')
let q5 = questao5.toUpperCase()

if( q1 === 'S'){
  contadors = contadors + 1;
}
else{
  contadorn = contadorn + 1;
}
if( q2 === 'S'){
  contadors = contadors + 1;
}
else{
  contadorn = contadorn + 1;
}
if( q3 === 'S'){
  contadors = contadors + 1;
}
else{
  contadorn = contadorn + 1;
}
if( q4 === 'S'){
  contadors = contadors + 1;
}
else{
  contadorn = contadorn + 1;
}
if( q5 === 'S'){
  contadors = contadors + 1;
}
else{
  contadorn = contadorn + 1;
}

if(contadors === 2){console.log("Voce e suspeito")}
else if(contadors === 3 ){console.log("Voce é Cumplice")}
else if(contadors === 4 ){console.log("Voce é Cumplice")}
else if(contadors === 5 ){console.log("Voce é o culpado")}
else if(contadors === 1 ){console.log("Voce é inocente")}
else if(contadors === 0 ){console.log("Voce é inocente")}

