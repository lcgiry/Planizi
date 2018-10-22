var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! test');
}).listen(8080);