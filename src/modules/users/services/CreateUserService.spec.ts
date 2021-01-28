import AppError from '@shared/errors/AppError'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUserService'

let fakeHashProvider: FakeHashProvider
let fakeUsersRepository: FakeUsersRepository
let createUserService: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider()
    fakeUsersRepository = new FakeUsersRepository()
    createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider)
  })

  it('should be able to create a user', async () => {

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123'
    })

    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('johndoe@gmail.com')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('password')
  })

  it('should not be able to create a new user with the same email from another', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456'
    })

    await expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
