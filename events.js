var events = require('events');
var emitter =new events.EventEmitter();
var uid = "nodejs";
var pass = "shubham"
 emitter.on("adduser", function(user, password)
{
    console.log("the user name is "+ user +" and the password is "+ password);
});
emitter.emit("adduser", uid,pass);
