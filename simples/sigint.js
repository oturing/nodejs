#!/usr/bin/env node

function exibir() {
    var hora = (new Date()).toTimeString().slice(0,8);
    console.log(hora);
}
setInterval(exibir, 100);
console.log('Tecle ^C para encerrar');

process.on('SIGINT', function () {
  console.log('SIGINT detectado. Encerrando...');
  process.exit(1);
});
