const db = require('../database/connection');
const { list } = require('./ProblemsController');

module.exports={
    async list(req, res){
        const tools = await db('tools').select('*');

        return res.json(tools)
    },

    async create(req, res){
        const {titleT, descriptionT} = req.body;

        const tool = await db('tools').insert({
            titleT,
            descriptionT
        });

        return res.json(tool)
    }
}