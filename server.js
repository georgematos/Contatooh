var http = require('http');
var app = require('./config/express')();

/* A função createServer recebe como parametro um
request listener, nesse caso, a instância do Express */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express Server escutando na porta ' +
    app.get('port'));
});