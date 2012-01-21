#!/usr/bin/env node

function exibir() {
    var hora = (new Date()).toTimeString().slice(0,8);
    console.log(hora);
}
setInterval(exibir, 1000);
console.log('Tecle ^C para encerrar');
