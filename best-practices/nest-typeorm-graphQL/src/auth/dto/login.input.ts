import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsEnum,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';
import { GRANTTYPE } from '../auth.constants';

@InputType({ description: 'Login Input' })
export class LoginInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @Field({ nullable: true })
  @IsOptional()
  readonly password: string;

  @Field({ nullable: true, defaultValue: 'password' })
  @IsOptional()
  @IsEnum(GRANTTYPE)
  readonly grantType: string;

  @Field({ nullable: true })
  @ValidateIf((o) => o.grantType === 'refreshToken')
  @IsNotEmpty()
  readonly refreshToken: string;
}
