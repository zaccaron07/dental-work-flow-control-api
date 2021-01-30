import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider'

interface IRequest {
  name: string
  entry_date: Date
  due_date: Date
  price: number
  done: boolean
  doctor_id: string
  patient_id: string
  user_id: string
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) { }

  async execute({ name, entry_date, due_date, price, done, doctor_id, patient_id, user_id }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.create({ name, entry_date, due_date, price, done, doctor_id, patient_id })

    await this.cacheProvider.invalidate(`orders:${user_id}`)

    return order
  }
}

export default CreateOrderService
