import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

class UpdateOrderDoneService {
  constructor(
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(id: string): Promise<Order> {
    const order = await this.ordersRepository.findById(id)

    if (!order) {
      throw new Error('Order not found.')
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
