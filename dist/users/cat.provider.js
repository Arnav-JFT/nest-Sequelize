"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catsProviders = void 0;
const data_entity_1 = require("./data.entity");
exports.catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: data_entity_1.Cat,
    },
];
//# sourceMappingURL=cat.provider.js.map