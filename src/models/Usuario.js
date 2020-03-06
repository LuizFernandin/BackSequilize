const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, 
        {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'user_id', as: 'enderecos' });
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }

};

module.exports = Usuario;