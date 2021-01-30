import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider'
import { inject, injectable } from 'tsyringe'
import IOrdersRepository from '../repositories/IOrdersRepository'

interface IRequest {
  id: string
  user_id: string
}

@injectable()
class DeleteOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) { }

  async execute({ id, user_id }: IRequest): Promise<void> {
    await this.ordersRepository.delete(id)

    await this.cacheProvider.invalidate(`orders:${user_id}`)
  }
}

export default DeleteOrderService
