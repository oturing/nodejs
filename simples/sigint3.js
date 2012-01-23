#!/usr/bin/env node

function exibir() {
  var hora = (new Date()).toTimeString().slice(0,8);
  console.log(hora);
}
setInterval(exibir, 100);
console.log('Tecle ^C para encerrar');

function constroi_terminar(vidas) {
  return function terminar() {
    vidas--;
    console.log('\tSIGINT detectado. Falta: '+vidas+' vida(s)' );
    if (vidas==0) {
      console.log('Encerrando...');
      process.exit(1);      
    }
  }
} 

process.on('SIGINT', constroi_terminar(5));
