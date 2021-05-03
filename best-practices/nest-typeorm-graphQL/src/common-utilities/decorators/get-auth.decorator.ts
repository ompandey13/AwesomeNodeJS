import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Auth } from '../../auth/auth.entity';

export const GetAuth = createParamDecorator((_, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const { auth }: { auth: Auth } = ctx.getContext().req.user;
  return auth;
});
