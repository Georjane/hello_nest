import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "generated/prisma/internal/prismaNamespace";

@Injectable()

export class AuthService{
    constructor(private prisma: PrismaService) {}
    async signup(dto: AuthDto) {
        // generate d password hash
const hash = await argon.hash(dto.password)
        // save the new user in the db

        try {

const user = await this.prisma.user.create({
    data: {
        email: dto.email,
        hash
    }

    })
    const { hash: _, ...userWithoutHash } = user; // ✅ exclude hash safely
  return userWithoutHash;}
  catch(error){
    if (error instanceof PrismaClientKnownRequestError) {
        if(error.code === 'P2002'){
            throw new ForbiddenException('Credentials taken')
        }
    }
    throw error
  }
    }

    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })

        // if user does not exist throw exception

        if(!user)
            throw new ForbiddenException(
        'Credentials Incorrect')
        // compare password

        const pwMatches = await argon.verify(
            user.hash,
            dto.password
        )
        // if password incorrect throw exception

        if (!pwMatches)
            throw new ForbiddenException(
        'Credentials Incorrect')
        // else send back user
        const { hash: _, ...userWithoutHash } = user; // ✅ exclude hash safely
  return userWithoutHash;
    }
}