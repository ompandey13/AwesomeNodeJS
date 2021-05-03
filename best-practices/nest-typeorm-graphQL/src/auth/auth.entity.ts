import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@Entity('authTokens')
@ObjectType()
export class Auth extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ nullable: true })
  accessToken: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  refreshToken: string;

  @Column()
  userId: string;

  @Column({ nullable: true })
  scope: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nToken: string;

  @Field(() => User)
  user: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
