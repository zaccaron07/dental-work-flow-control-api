import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider'

interface IRequest {
  id: string
  user_id: string
}

@injectable()
class UpdateOrderDoneService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) { }

  async execute({ id, user_id }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.findById(id)

    if (!order) {
      throw new AppError('Order not found.')
    }

    if (!order.done) {
      order.done = true

      const savedOrder = await this.ordersRepository.save(order)

      await this.cacheProvider.invalidate(`orders:${user_id}`)

      return savedOrder
    }

    return order
  }
}

export default UpdateOrderDoneService
