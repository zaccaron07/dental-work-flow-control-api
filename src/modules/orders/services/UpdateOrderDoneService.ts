import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

@injectable()
class UpdateOrderDoneService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(id: string): Promise<Order> {
    const order = await this.ordersRepository.findById(id)

    if (!order) {
      throw new AppError('Order not found.')
    }
    
    if (!order.done) {
      order.done = true
      
      const savedOrder = await this.ordersRepository.save(order)

      return savedOrder
    }

    return order
  }
}

export default UpdateOrderDoneService
