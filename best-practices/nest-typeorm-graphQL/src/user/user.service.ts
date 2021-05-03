import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcryptjs';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UserStatus } from '../enums/users.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  geById(userId: string, relations?: string[]): Promise<User | undefined> {
    return this.userRepository.findOne({
      relations,
      where: {
        id: userId,
      },
    });
  }

  async login(
    email: string,
    password: string,
  ): Promise<{
    employee: User;
  }> {
    const employee: User = await this.userRepository.findOne({
      relations: ['organization'],
      where: {
        email,
      },
    });

    if (!employee) {
      throw new HttpException('Invalid_Login', HttpStatus.BAD_REQUEST);
    }

    const isMatch = await compare(password, employee.password);
    if (!isMatch) {
      throw new HttpException('Invalid_Login', HttpStatus.BAD_REQUEST);
    }
    if (employee.status !== UserStatus.ACTIVE) {
      throw new HttpException('Inactive_account', HttpStatus.BAD_REQUEST);
    }
    return { employee };
  }
}
