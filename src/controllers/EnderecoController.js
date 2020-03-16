// const Usuario = require('../models/Usuario');
// const Endereco = require('../models/Endereco');

const db = require("../models");

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;
        const usuario = await db.Usuario.findByPk(user_id, {
            include: { association : "enderecos" }
        });
        return res.json(usuario.enderecos);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { cep, rua, numero} = req.body;
        const usuario = await db.Usuario.findByPk(user_id);

        if(!usuario) {
            return res.status(400).json({ error: 'Usuario não encontrado!' })
        }

        const endereco = await db.Endereco.create({
            cep,
            rua,
            numero,
            user_id,
        });

        return res.json(endereco);
    }
};