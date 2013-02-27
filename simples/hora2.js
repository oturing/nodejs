#!/usr/bin/env node

function agora() {
    return (new Date()).toTimeString().slice(0,8);
}

function exibir() {
    console.log(agora());
}

function exibir_indentado() {
    for (var i=0; i < 1000000000; i++) {var x = i*10;};
    console.log('\t\t'+agora());
}

setInterval(exibir, 1000);
setInterval(exibir_indentado, 700);
console.log('Tecle ^C para encerrar');
