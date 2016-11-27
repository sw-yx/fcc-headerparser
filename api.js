var express=require('express')
var app        = express();                 // define our app using express
//var routes = require('./app/routes/index.js');
    
var port = process.env.PORT || 8080;        // set our port
    
// The format follows as, alias to use for real path, also allows permission to such path.
//app.use('/api', express.static(process.cwd() + '/app/api'));
    
//routes(app);



app.get("/",function(req, res) {
      var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     var info = {
         'ip-address': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
    });



app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});