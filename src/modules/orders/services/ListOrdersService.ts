import { inject, injectable } from 'tsyringe'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(): Promise<Order[] | undefined> {
    const orders = await this.ordersRepository.findAll()

    return orders
  }
}

export default ListOrdersService
