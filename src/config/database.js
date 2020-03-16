require("dotenv").config();

module.exports = {
    "development": {
        username: process.env.MYSQL_NOME,
        password: process.env.MYSQL_KEY,
        database: process.env.MYSQL_DBNAME,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        define: {
            timestamps: 'true',
            underscored: 'true',
        }
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        dialect: 'mysql',
        define: {
            timestamps: 'true',
            underscored: 'true',
        }
    }
}