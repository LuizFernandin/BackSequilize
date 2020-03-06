const { Op } = require('sequelize');
const Usuario = require('../models/Usuario');

module.exports = {
    async show(req, res) {
        const usuario = await Usuario.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like] : '%@rocketseat.com.br',
                } 
            },
            include: [
                { association: 'enderecos', where: { rua: 'João Naves' } },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'Nodeo%'
                        }
                    }
                }
            ]
        });

        return res.json(usuario);
    }
}