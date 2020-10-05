const db = require('../database/connection');

module.exports = {

    async list(req, res){
        const strategy = await db('strategy')
        .innerJoin('str_tools', 'str_tools.id_s', '=', 'strategy.id')
        .innerJoin('tools', 'tools.id','=','str_tools.id_t')
        .select(
            'strategy.id',
            'strategy.title',
            'strategy.description',
            db.raw('group_concat(tools.titleT) as tools')
        ).groupBy('strategy.id');

        return res.json(strategy);
    },

    async listStrategy(req, res){
        const {id_p} = req.params;

        const strategys = await db('strategy')
        .innerJoin('pro_str', 'pro_str.id_s', '=', 'strategy.id')
        .innerJoin('problems', 'problems.id', '=', 'pro_str.id_p')
        .where('problems.id', '=', id_p)
        .select('strategy.*')

        return res.json(strategys);
    },

    async create(req, res){
        const {title, description, tools} = req.body;
        const {id_p} = req.params;

        const strategy = await db('strategy').insert({
            title,
            description
        })

        const id_s = strategy[0]

        const ids = tools.map((toolsId) =>{
            return{
                id_s,
                id_t: toolsId.id_t
            }
        })

        const str_tools = await db('str_tools').insert(ids);

        const pro_str = await db('pro_str').insert({
            id_p,
            id_s
        });

        return res.json({strategy, str_tools, pro_str});
    },

    async addExist(req, res){
        const {id_s} = req.body;
        const {id_p} = req.params;

        const inter = await db('pro_str').insert({
            id_p,
            id_s
        })

        return res.json(inter);
    }
}