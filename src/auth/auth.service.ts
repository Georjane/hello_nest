import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})

export class AuthService{
    constructor(private prisma: PrismaService) {}
    signup() {
        return { msg: 'sign up success'}
    }

    signin() {
        return 'sign in working'
    }
}