const expres = require('express');

const themesController = require('./controllers/ThemeController');
const problemsController = require('./controllers/ProblemsController');
const toolsController = require('./controllers/ToolsController');
const strategyController = require('./controllers/StrategyController');

const routes = expres.Router();

routes.post('/themes', themesController.create);
routes.get('/themes', themesController.list)

routes.post('/problems', problemsController.create);
routes.get('/problems', problemsController.list);

routes.post('/tools', toolsController.create);
routes.get('/tools', toolsController.list);

routes.get('/strategys', strategyController.list);
routes.get('/problems/strategy/:id_p', strategyController.listStrategy);
routes.post('/problems/strategy/add/:id_p', strategyController.addExist);
routes.post('/problems/strategy/add/new/:id_p', strategyController.create);

module.exports = routes;