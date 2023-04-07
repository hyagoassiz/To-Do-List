const Sequelize = require("sequelize")


// BANCO DE DADOS MYSQL
// const sequelize = new Sequelize("tasks", "root", "1234", {
//     host: "localhost",
//     dialect: "mysql"
// })

// BANCO DE DADOS SQLITE
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./tasks.sqlite"
})

try {
    sequelize.authenticate()
    console.log("Conectado ao banco de dados")
} catch (error) {
    console.log(`Não foi possível conectar ao MySql: ${error}`)
}


module.exports = sequelize