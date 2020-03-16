const { Op } = require('sequelize');

const db = require("../models");

module.exports = {
    async show(req, res) {
        const usuario = await db.Usuario.findAll({
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
                            [Op.like]: 'React%'
                        }
                    }
                }
            ]
        });

        return res.json(usuario);
    }
}