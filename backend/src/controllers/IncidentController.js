const connection = require('../database/connection')

module.exports = {
    async index(require, response){
        const incidents = await connection('incidents').select('*');
        return response.json( incidents );
    },

    async create(require, response){
        const { title, description, value } = require.body;
        const ong_id = require.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    }
};