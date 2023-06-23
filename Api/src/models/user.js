const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {

    sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
            
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailConfirmed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        token:{
            type: DataTypes.STRING,
    
        },
        disabledAccount: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    },{timestamps: false})

}