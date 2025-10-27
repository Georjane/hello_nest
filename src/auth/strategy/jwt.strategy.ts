import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService,private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET', { infer: true })!, // <-- added non-null assertion
    });
  }

  async validate(payload: JwtPayload) {
    // This will attach user info to req.user
    const user = await this.prisma.user.findUnique({
        where: {
            id: payload.sub
        }
    })
    // delete user.hash
    // return user;
     if (!user) return null;
    const { hash: _, ...userWithoutHash } = user; // ✅ exclude hash safely
  return userWithoutHash;
  }
}
