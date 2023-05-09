const CONFIG = require('./config');
const path = require("path")
const express = require('express');
const  routes = require('./routes');

let App = express();

App.set('views', './views');
App.set('port', CONFIG.SERVER.PORT);

App.use(express.static("static"));

App.use(routes);

App.get('/*', (request, response) => {
    response.send("No found :(");
});

module.exports = App;