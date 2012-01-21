#!/usr/bin/env node

function agora() {
    return (new Date()).toTimeString().slice(0,8);
}

function exibir() {
    console.log(agora());
}

function exibir_indentado() {
    console.log('\t\t'+agora());
}

function exibir_mais_indentado() {
    var atraso = Math.floor(Math.random()*3000);
    console.log('\t\t\t\t'+agora()+' ('+atraso+')');
    setTimeout(exibir_mais_indentado, atraso);
}

setInterval(exibir, 1000);
setInterval(exibir_indentado, 700);
console.log('Tecle ^C para encerrar');
exibir_mais_indentado();
