var express = require('express');
var dbConnect = require('./db');
var log = require ('./log');
var app = express();




require('./router')(app);

app.listen('3000', function(){
    console.log('Server running in port 3000');
});
app.use(express.static(__dirname = '/public'));
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

module.exports = app;