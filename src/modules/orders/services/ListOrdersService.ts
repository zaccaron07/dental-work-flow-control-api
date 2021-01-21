import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

class ListOrdersService {
  constructor(
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(): Promise<Order[] | undefined> {
    const orders = await this.ordersRepository.findAll()

    return orders
  }
}

export default ListOrdersService
