import User from '@modules/users/infra/typeorm/entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUsersRepository from '../IUsersRepository'

import { v4 as uuid } from 'uuid'

class FakeUsersRepository implements IUsersRepository {
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

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email)

    return user
  }

  public async save(user: User): Promise<User> {
    const index = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[index] = user

    return user
  }
}

export default FakeUsersRepository
