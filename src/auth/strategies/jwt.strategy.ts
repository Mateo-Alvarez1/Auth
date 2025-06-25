import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { UnauthorizedException } from "@nestjs/common";
import { User } from "../entities/User.entity";
import { JwtPayload } from "src/interfaces/jwt.interface";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    configService: ConfigService
  ) {
    super({
      secretOrKey: String(process.env.JWT_SECRET), // probamos
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;
    const user = await this.userRepository.findOneBy({ id });
    console.log(user);

    if (!user) {
      throw new UnauthorizedException("Token not valid");
    }

    if (!user.isActive) {
      throw new UnauthorizedException("User is inactive , talk with an admin");
    }

    return user;
  }
}
