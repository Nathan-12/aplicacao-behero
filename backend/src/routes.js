const express = require('express');
const routes = express.Router();

routes.post('/users', (request, response) => {
    //const paramsQuery = request.query;
    //const paramsRoute = request.params;
    //const body = request.body;

    //console.log('paramsQuery: ', paramsQuery);
    //console.log('paramsRoute: ', paramsRoute);
    //console.log('body: ', body);

    return response.json({
        evento: 'Aplicação BeTheHero',
        dev: 'Nathan Lima'
    })
});

module.exports = routes;
