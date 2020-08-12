import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../../../entities/UserEntity'

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  public async findMany(take: number, skip: number): Promise<{ total: number, items: UserEntity[] }> {
    const qb = this.createQueryBuilder('u')
      .offset(skip)
      .limit(take);

    const [items, total] = await qb.getManyAndCount();

    return {
      total,
      items,
    }
  }
}
