var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>'+Date()+'</h1>');
  res.end();
}).listen(1337, "127.0.0.1");
console.log('Servidor rodando em http://127.0.0.1:1337/');
