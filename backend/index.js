const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    //const paramsQuery = request.query;
    //const paramsRoute = request.params;
    const body = request.body;

    //console.log('paramsQuery: ', paramsQuery);
    //console.log('paramsRoute: ', paramsRoute);
    console.log('body: ', body);

    return response.json({
        evento: 'Aplicação BeHero',
        dev: 'Nathan'
    })
});

app.listen(3333);

