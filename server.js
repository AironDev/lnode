var http = require('http');
var dt = require('./modules/mydate');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.write(dt.mydate() + "<h1>");
    res.write(dt.greet());
    res.end()
}).listen(8080, '127.0.0.1')
    console.log("server created at 127.0.0.1:8080")