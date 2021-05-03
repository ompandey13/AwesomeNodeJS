import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../../user/user.entity';

export class tax1605023234147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const UserRepository = await getRepository(User);
    const user: User = UserRepository.create();
    Object.assign(user, {
      username: 'om',
      firstName: 'om',
      lastName: 'pandey',
      phone: '1234567890',
      email: 'testuser@malinator.com',
      password: 'password',
    });
    await queryRunner.manager.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from users');
  }
}
