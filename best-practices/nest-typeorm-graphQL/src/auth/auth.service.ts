import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { UserService } from '../user/user.service';
import { Auth } from './auth.entity';
import { authConstants } from './auth.constants';
// import { UserStatus } from '../enums/users.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async vaidateRefreshToken(refreshToken): Promise<Auth | undefined> {
    let auth;
    try {
      const payload = this.jwtService.verify(refreshToken);
      auth = await this.authRepository.findOneOrFail(payload.authId);
    } catch (err) {
      throw new UnauthorizedException('Token expired.');
    }
    const user = await this.userService.geById(auth.userId, ['organization']);
    if (!user) throw new UnauthorizedException('Token expired.');
    const newPayload = {
      email: user.email,
      authId: auth.id,
    };
    const accessToken = this.jwtService.sign(newPayload, {
      expiresIn: authConstants.ACCESS_TOKEN_LIFE,
    });
    auth.accessToken = accessToken;
    auth.user = user;
    return auth;
  }

  async login(loginInput): Promise<Auth | undefined> {
    const { email, password } = loginInput;
    const { employee } = await this.userService.login(email, password);
    const auth = new Auth();
    auth.userId = employee.id;
    auth.role = employee.role;
    await this.authRepository.save(auth);
    const payload = {
      email: employee.email,
      authId: auth.id,
    };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: authConstants.ACCESS_TOKEN_LIFE,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: authConstants.REFRESH_TOKEN_LIFE,
    });
    auth.accessToken = accessToken;
    auth.refreshToken = refreshToken;
    auth.user = employee;
    return auth;
  }

  async updateNotificationToken(auth: Auth, nToken: string): Promise<boolean> {
    Object.assign(auth, { nToken });
    await auth.save();
    return true;
  }

  async logout(auth: Auth): Promise<boolean> {
    try {
      await this.authRepository.delete(auth.id);
      return true;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
