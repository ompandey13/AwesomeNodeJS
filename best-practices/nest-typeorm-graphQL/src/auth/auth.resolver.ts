import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GetAuth } from '../common-utilities/decorators/get-auth.decorator';
import { GqlAuthGuard } from '../common-utilities/guards/auth.guard';
import { Auth } from './auth.entity';
import { GRANTTYPE } from './auth.constants';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

@Resolver((_of) => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async login(@Args('login') loginInput: LoginInput) {
    const { grantType } = loginInput;
    if (grantType === GRANTTYPE.REFRESH_TOKEN) {
      return this.authService.vaidateRefreshToken(loginInput.refreshToken);
    }
    return this.authService.login(loginInput);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async notificationToken(
    @Args('nToken', { nullable: true }) nToken: string,
    @GetAuth() auth: Auth,
  ) {
    return this.authService.updateNotificationToken(auth, nToken);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async logout(@GetAuth() auth: Auth) {
    return this.authService.logout(auth);
  }
}
