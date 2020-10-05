const { request } = require('express');
const db = require('../database/connection');

module.exports ={

    async list(req, res){
        const themes = await db('themes').select('*');

        return res.json(themes);
    },

    async create (req, res){
        const { title, description } = req.body;

        const theme = await db('themes').insert({
            title,
            description
        })

        return res.json(theme);
    }

}