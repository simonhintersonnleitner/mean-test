var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {path: '/mean/socket.io'});

app.get('/mean', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('Im running!\nlistening on *:3000');
});
