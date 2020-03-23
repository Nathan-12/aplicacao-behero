const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Aplicação BeHero',
        dev: 'Nathan'
    })
});

app.listen(3333);

