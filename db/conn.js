const Sequelize = require("sequelize")
const sequelize = new Sequelize("tasks", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Conectado ao banco de dados")
} catch(error) {
    console.log(`Não foi possível conectar ao MySql: ${error}`)
}

module.exports = sequelize