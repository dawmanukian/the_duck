const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    telegramId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    refCode: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    referral: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    followedTg: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    followedX: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = {User};
