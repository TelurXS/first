const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get('/table', (request, response) => {
    response.sendFile(path.join(__dirname, './pages/VatsLab14-1.html'));
});

routes.get('/page', (request, response) => {
    response.sendFile(path.join(__dirname, './pages/VatsLab14-2.html'));
});

module.exports = routes;