const Sequelize = require("sequelize");

const sequelize =  new Sequelize("reactjs", "root", "", {
    dialect: "mysql",
    host: "localhost"
}); // настройка sequalize

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}