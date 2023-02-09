"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayedMusicInstance = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class PlayedMusicInstance extends sequelize_1.Model {
}
exports.PlayedMusicInstance = PlayedMusicInstance;
PlayedMusicInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    genreId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        validate: {
            notNull: { msg: "Genre is required" },
            notEmpty: { msg: "Genre is required" },
        }
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Image is required" },
            notEmpty: { msg: "Image is required" },
        },
    },
    songUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Song is required" },
            notEmpty: { msg: "Song is required" },
        },
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.db,
    tableName: "recentMusic",
});
//# sourceMappingURL=RecentMusicModel.js.map