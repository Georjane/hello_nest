import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        hash: true,
        firstName: true,
        lastsName: true,
        createdAt: true,
        updatedAt: true,
        // Exclude the hash field for security reasons
      },
    });
  }
}
