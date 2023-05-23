const express = require('express');
const path = require('path');
const routes = express.Router();

routes.get("/power", (request, response) => {
    response.sendFile(path.join(__dirname, "./pages/index.html"));
})


routes.post("/power", (request, response) => {
    let number = parseInt(request.query.number);
    console.log(number)
    response.send({ number: number * number});
})


module.exports = routes;