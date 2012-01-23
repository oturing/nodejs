var http = require('http');

function responder(req, res) {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html>');
  res.write('<h1>'+Date()+'</h1>');
  res.end('</html>');
}

var servidor = http.createServer(responder);

servidor.listen(1337, "127.0.0.1");
console.log('Servidor rodando em http://127.0.0.1:1337/');
