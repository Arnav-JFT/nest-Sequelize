"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("../data");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    jwt(user) {
        return this.jwtService.sign({ user });
    }
    create(name, job, salary) {
        const obj = {
            id: data_1.data[data_1.data.length].id + 1,
            name,
            job,
            salary,
        };
        data_1.data.push(obj);
        return data_1.data;
    }
    findAll() {
        return data_1.data;
    }
    update(id, name, job, salary) {
        const obj = {
            id,
            name,
            job,
            salary,
        };
        const idx = data_1.data.findIndex((ele) => ele.id == id);
        data_1.data[idx] = obj;
        return data_1.data;
    }
    remove(id) {
        const idx = data_1.data.findIndex((ele) => ele.id == id);
        data_1.data.splice(idx, 1);
        return data_1.data;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map