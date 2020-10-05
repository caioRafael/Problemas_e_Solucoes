const { request } = require('express');
const db  = require('../database/connection');

module.exports={

    async list(req, res){
        const problem = await db('problems')
        .innerJoin('pro_themes', 'pro_themes.id_p', '=', 'problems.id')
        .innerJoin('themes', 'themes.id','=','pro_themes.id_t')
        .select(
            'problems.id',
            'problems.titleP',
            'problems.descriptionP',
            db.raw('group_concat(themes.title) as themes')
        ).groupBy('problems.id')

        return res.json(problem)
    },
    

    async create(req, res){
        const{titleP, descriptionP, themes} = req.body;

        const problem = await db('problems').insert({
            titleP,
            descriptionP
        })

        const id_p = problem[0];

        const ids = themes.map((themesId) =>{
            return{
                id_p,
                id_t: themesId.id_t
            } 
        });

        const intersection = await db('pro_themes').insert(ids);

        return res.json({problem, intersection})
    }
}