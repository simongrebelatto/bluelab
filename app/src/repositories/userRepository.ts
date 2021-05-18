import { EntityRepository, Repository } from 'typeorm';
import { User } from '../database/model/user';

@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export { UserRepository };
