const { Sequelize } = require('sequelize') // tem o 

const db = new Sequelize('bd_user','root','senai',{
    dialect: 'mysql',
    port: 3306
})

module.exports = db
