
module.exports = socket => {

    console.log('socket conectado', socket.id);
    socket.broadcast.emit('evento', 'Novo usuário conectado!')

    socket.on('msg', msg => {
        socket.broadcast.emit('nova-msg', msg)
    });

}
