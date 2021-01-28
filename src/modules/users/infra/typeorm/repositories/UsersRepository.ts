import User from '../entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import { getRepository, Repository } from 'typeorm'

class UsersRepository implements IUsersRepository {
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

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { email } })

    return user
  }
}

export default UsersRepository