import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver('Author')
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => String)
  async getHello() {
    return this.appService.getHello();
  }
}
