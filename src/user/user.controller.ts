import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import type { User } from 'generated/prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
        @Get()
        async findAll(): Promise<User[]> {
            return this.userService.findAll();
        }

    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user: User) {
        return user
    }
}
