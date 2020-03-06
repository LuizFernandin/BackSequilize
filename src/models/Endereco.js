const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(connection) {
        super.init({
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
        }, 
        {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'user_id', as: 'usuario' });
    }

};

module.exports = Endereco;