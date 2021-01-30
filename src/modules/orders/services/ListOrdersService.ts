import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider'
import { inject, injectable } from 'tsyringe'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) { }

  async execute(user_id: string): Promise<Order[] | undefined> {
    const cacheKey = `orders:${user_id}`

    let orders = await this.cacheProvider.recover<Order[]>(cacheKey)
    
    if (!orders) {
      orders = await this.ordersRepository.findAll()
      
      await this.cacheProvider.save(`orders:${user_id}`, orders)
    }

    return orders
  }
}

export default ListOrdersService
