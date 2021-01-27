import User from '@modules/users/infra/typeorm/entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUserRepository from '../IUserRepository'

import { v4 as uuid } from 'uuid'

class FakeUsersRepository implements IUserRepository {
  private users: User[] = []

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, data)

    this.users.push(user)

    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)

    return user
  }
}

export default FakeUsersRepository
