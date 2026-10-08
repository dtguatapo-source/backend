import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        createdAt: Date | null;
        username: string;
        role: import("../generated/prisma/enums").UserRole;
    }>;
    findByUsername(username: string): Promise<{
        id: number;
        createdAt: Date | null;
        username: string;
        passwordHash: string;
        role: import("../generated/prisma/enums").UserRole;
    } | null>;
}
