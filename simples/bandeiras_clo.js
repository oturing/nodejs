#!/usr/bin/env node
'use strict';

var fs = require('fs');
var request = require('request');

var BASE_URL = ('https://www.cia.gov/library/publications/the-world-factbook'
                + '/graphics/flags/large/');

var DESTINO = './bandeiras/';

var QT_BAIXAR = 10;

var i = 0;
var nome = '';
var nomes = [];

console.time('tempo transcorrido');

nomes = fs.readFileSync('bandeiras.txt', 'utf-8').split('\n');

function salvar_com_index(error, response, body, index) {
  var nome_arq = '';
  if (response.error) {
    console.log('Error: '+response.error);
  }
  if (!error && response.statusCode == 200) {
    nome_arq = response.request.href.slice(BASE_URL.length);
    fs.writeFile(DESTINO+nome_arq, body, function (err) {
      if (err) throw err;
      console.log('\t'+index+' '+nome_arq+' salvo');
    });
  }
}

function construir_salvar(index) {
  return function salvar(error, response, body) {
    salvar_com_index(error, response, body, index);
  }
}

for (i=0; i<QT_BAIXAR; i++) {
  nome = nomes[i];
  console.log(i+' '+nome);
  request({uri:BASE_URL+nome, encoding:null}, construir_salvar(i));
}

process.on('exit', function () {
  console.timeEnd('tempo transcorrido');
});
