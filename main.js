var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req,res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("Today's date is:"+  dt.myDatetime());
    res.end();
    //console.log("server is created");
}).listen(8000);

console.log("server is created");