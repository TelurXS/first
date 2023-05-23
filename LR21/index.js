const CONFIG = require('./config');
const App = require('./server');
const http = require('http');

const server = http.createServer(App);

server.listen(CONFIG.SERVER.PORT);

server.on('listening', () => {
    console.log(`Server Started: ` + 'http://' + CONFIG.SERVER.HOST + ":" + CONFIG.SERVER.PORT);
});