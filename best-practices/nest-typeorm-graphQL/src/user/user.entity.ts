import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserStatus, UserRole } from '../enums/users.enum';

@Entity('users')
@Unique(['email'])
@Unique(['phone'])
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  firstName: string;

  @Field({ nullable: true })
  @Column({ nullable: true, default: '' })
  lastName?: string;

  @Field()
  fullName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column({
    type: 'simple-enum',
    default: UserRole.USER,
    enum: UserRole,
  })
  role?: UserRole;

  @Field()
  @Column({
    type: 'simple-enum',
    default: UserStatus.ACTIVE,
    enum: UserStatus,
  })
  status?: UserStatus;

  @Field()
  @Column()
  email: string;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
