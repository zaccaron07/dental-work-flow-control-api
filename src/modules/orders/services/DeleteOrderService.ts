import IOrdersRepository from '../repositories/IOrdersRepository'

class DeleteOrderService {
  constructor(
    private ordersRepository: IOrdersRepository
  ) { }

  async execute(id: string): Promise<void> {
    await this.ordersRepository.delete(id)
  }
}

export default DeleteOrderService
