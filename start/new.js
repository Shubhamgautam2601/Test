var http = require('http');
var staff = require('./staff.json');

var server= http.createServer(function(req, res){

    console.log(req.url);
 
    if(req.url==="/"){
        res.writeHead(200, {'content-type': 'text/json'});
        res.end(JSON.stringify(staff));
    }
    else if( req.url==="/MCA"){
        var data = staff.filter(function (item){
            return item.Qualification  === "MCA";

        });
        res.writeHead(200, {'content-type': 'text/json'});
        res.end(JSON.stringify(data));
        
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end("Sorry...! No record found");
        

    }

});

server.listen(3000, function(){
    console.log("listing at port number 3000");
})