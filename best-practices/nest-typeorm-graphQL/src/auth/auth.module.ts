import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable import/no-cycle */
import { UserModule } from '../user/user.module';
import { authConstants } from './auth.constants';
import { AuthRepository } from './auth.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
/* eslint-disable import/no-cycle */

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthRepository]),
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: authConstants.JWT_SECRET,
      signOptions: { expiresIn: authConstants.ACCESS_TOKEN_LIFE },
    }),
  ],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
