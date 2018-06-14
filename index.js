// creating web servers
var http= require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (req, res){

    if(req.url ==="/"){
   fs.readFile('demo.html', function(err, data){
   res.writeHead(200,{'content-type':'text/html'});
       res.write(data);
       res.end();
   });
}else if(req.url.match("\.css$")){
    var cssPath = path.join(__dirname,req.url);
    // console.log(cssPath);
var filestream = fs.createReadStream(cssPath, "utf-8");
    res.writeHead(200, {"content-type": "text/css"});
    filestream.pipe(res);
}
   
}).listen(3000);


