const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const EnderecoController = require('./controllers/EnderecoController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

routes.get('/usuario/lista', UsuarioController.index);
routes.post('/usuario', UsuarioController.store);

routes.get('/usuario/:user_id/enderecos', EnderecoController.index);
routes.post('/usuario/:user_id/enderecos', EnderecoController.store);

routes.get('/usuario/:user_id/techs', TechController.index);
routes.post('/usuario/:user_id/techs', TechController.store);
routes.delete('/usuario/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;