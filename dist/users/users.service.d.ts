import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date | null;
    }>;
    findByUsername(username: string): Promise<{
        id: number;
        username: string;
        passwordHash: string;
        role: import("../generated/prisma/enums").UserRole;
        createdAt: Date | null;
    } | null>;
}
