import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        createdAt: Date | null;
        username: string;
        role: import("../generated/prisma/enums").UserRole;
    }>;
}
