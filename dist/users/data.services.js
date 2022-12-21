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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
let CatsService = class CatsService {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    async findAll() {
        return this.catsRepository.findAll();
    }
    async delete(id) {
        const user = await this.catsRepository.findByPk(id);
        await (user === null || user === void 0 ? void 0 : user.destroy());
    }
    async create(name, job, salary) {
        let obj = {
            name,
            job,
            salary,
        };
        await this.catsRepository.create(obj);
        return this.catsRepository.findAll();
    }
    async update(id, name, job, salary) {
        const user = await this.catsRepository.findByPk(id);
        await (user === null || user === void 0 ? void 0 : user.update({ name, job, salary }));
        return this.catsRepository.findAll();
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CATS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=data.services.js.map