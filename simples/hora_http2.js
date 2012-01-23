var http = require('http');

var servidor = http.createServer(function (req, res) {
  console.log('click');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html>');
  res.write('<h1>'+Date()+'</h1>');
  res.end('</html>');
});

servidor.listen(1337, "127.0.0.1");
console.log('Servidor rodando em http://127.0.0.1:1337/');
