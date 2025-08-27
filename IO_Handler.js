const Product_Controller = require("./server_config/Product_Controller");

module.exports = (io) => {
    io.of('/sendActions')
        .on('connection', (socket) => {
            console.log("New client connected")
            socket.emit('connected', 'Connected to server');
            socket.on('sendProductActions', (actions) => {
                Product_Controller.receiveProductActions(socket, actions);
            });
            
            socket.on('disconnect', () => {
                socket.disconnect();
                console.log("Client disconnected")
            });
        });

};