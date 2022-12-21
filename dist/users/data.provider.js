"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const data_entity_1 = require("./data.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'AS',
                password: '123456',
                database: 'exampleDB',
            });
            sequelize.addModels([data_entity_1.Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=data.provider.js.map