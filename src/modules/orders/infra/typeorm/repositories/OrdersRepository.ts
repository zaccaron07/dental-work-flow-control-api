import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO'
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository'
import { getRepository, Repository } from 'typeorm'
import Order from '../entities/Order'

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>

  constructor() {
    this.ormRepository = getRepository(Order)
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(orderData)

    await this.ormRepository.save(order)

    return order
  }

  public async findAll(): Promise<Order[] | undefined> {
    const orders = await this.ormRepository.find()

    return orders
  }
}

export default OrdersRepository
