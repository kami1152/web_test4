var http = require('http'); // 서버 구동을 위한 node 내장 모듈 불러옴
 
var hostname = '127.0.0.1'; 
var port = 3000;
 
http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n'); // 화면에 출력되는 텍스트 
}).listen(port, hostname);
 
console.log('Server running at http://'+hostname+':'+port);