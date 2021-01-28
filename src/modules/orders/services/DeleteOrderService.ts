import { inject, injectable } from 'tsyringe'
import IOrdersRepository from '../repositories/IOrdersRepository'

@injectable()
class DeleteOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.ordersRepository.delete(id)
  }
}

export default DeleteOrderService
