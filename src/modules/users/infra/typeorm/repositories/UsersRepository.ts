import User from '../entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUserRepository from '@modules/users/repositories/IUserRepository'
import { getRepository, Repository } from 'typeorm'

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne(id)

    return user
  }
}

export default UserRepository