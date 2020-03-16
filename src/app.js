require("dotenv").config();

const express = require('express');
const routes  = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 8080;
const models = require("./models");

models.sequelize.sync({}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on localhost:" + PORT);
    });
});