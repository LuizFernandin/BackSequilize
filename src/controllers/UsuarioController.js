const db = require("../models");

module.exports = {
    async index(req, res) {
        const usuarios = await db.Usuario.findAll();
        return res.json(usuarios);
    },

    async store(req, res) {
        const { name, email } = req.body;
        const usuario = await db.Usuario.create({ name, email });
        return res.json(usuario);
    }
};