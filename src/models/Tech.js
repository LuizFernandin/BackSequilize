// const { Model, DataTypes } = require('sequelize');

// class Tech extends Model {
//     static init(connection) {
//         super.init({
//             name: DataTypes.STRING,
//         }, 
//         {
//             sequelize: connection,
//             tableName: 'techs'
//         })
//     }

//     static associate(models) {
//         this.belongsToMany(models.Usuario, { foreignKey: 'tech_id', through: 'user_techs', as: 'usuarios' });
//     }

// };

// module.exports = Tech;

module.exports = function(sequelize, DataTypes){
    const Tech = sequelize.define("Tech", {
            name: DataTypes.STRING,
    }, {
        tableName: 'techs'
     });

    return Tech;
}