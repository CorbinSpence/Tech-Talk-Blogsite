const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model{
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
        title:{
            
        },
        text:{
            
        },
        user_id:{
            
        },
    }
)