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
const prisma_service_1 = require("../prisma/prisma.service");
const password_1 = require("../auth/password");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const { username, password, confirmPassword } = createUserDto;
        if (password !== confirmPassword) {
            throw new common_1.BadRequestException('Las contraseñas no coinciden');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { username },
        });
        if (existingUser) {
            throw new common_1.ConflictException('El nombre de usuario ya está registrado');
        }
        const passwordHash = await (0, password_1.hashPassword)(password);
        const user = await this.prisma.user.create({
            data: {
                username,
                passwordHash,
            },
        });
        const { passwordHash: _, ...result } = user;
        return result;
    }
    async findByUsername(username) {
        return this.prisma.user.findUnique({
            where: { username },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map