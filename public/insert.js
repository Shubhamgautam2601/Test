var http = require('http');
var fs= require('fs');
var queryString = require('querystring');
var Mongoclient = require('mongodb').MongoClient;
var url ="mongodb://localhost::27017/college/";

var server= http.createServer(function(req,res){

    if(req.url==="/form")
    {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream("./form.html", "UTF-8").pipe(res);

    }
    else if(req.method==="POST"){
        var data="";
        req.on("data",function(chunk){
            data+=chunk;
        });
        req.on("end", function(chunk){
           var d= queryString.parse(data);
           console.log(d);
            // Mongoclient.connect(url, function(err, result){
            //     if(err) throw err;
            //     var d= queryString.parse(data);
            //     db.collection('student').insertOne(q,function (err,res){
            //         if(err) throw err;
            //         console.log("1 Data inserted");
            //         db.close();
            //     })
            
            //console.log(d);
        });
    }


});
server.listen(4000);