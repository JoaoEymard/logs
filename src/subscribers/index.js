
const arrUsers = {};

const isUser = usr => Object.keys(arrUsers).includes(usr);

module.exports = socket => {

    console.log('socket conectado', socket.id);
    socket.broadcast.emit('evento', 'Novo usuário conectado!')

    socket.on('msg', msg => {

        const msgPrivada = (/^@(\S+)/i.exec(msg) || [])[1];

        if (isUser( msgPrivada )) {
            socket.to(arrUsers[msgPrivada]).emit('nova-msg', msg);
        } else {   
            socket.broadcast.emit('nova-msg', msg)
        }
    });

    socket.on('newUser', msg => {
        arrUsers[msg] = socket.id;
        console.log(arrUsers);
        socket.broadcast.emit('evento', `Usuário ${ msg } criado com sucesso`);
    });

}
