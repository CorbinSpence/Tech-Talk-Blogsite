const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model{
    checkPassword(loginPw){

    }
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            
        },
        password:{
            
        },
        name:{
            
        },
    }
)