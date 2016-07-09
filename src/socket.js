var io; //our socket.io server (passed in from the app)

var configureSockets = function(socketio) {
  io = socketio;

  io.sockets.on('connection', function(socket) {

    socket.join('livefeed');

    socket.on('kick_happened', function(data){
      console.log(data);
      socket.emit('kick', {time: 10});
    });
  
  socket.emit('Update_toClient', {'gif' : 'Hotline Bling' , 'sc' : 'https://soundcloud.com/jagjaguwar/unknown-mortal-orchestra-cant-keep-checking-my-phone'});

    socket.on('disconnect', function(data){
      socket.leave('livefeed');
    });

  });
};

//export our public function
module.exports.configureSockets = configureSockets;
