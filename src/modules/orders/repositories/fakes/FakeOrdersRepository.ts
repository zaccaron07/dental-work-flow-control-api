import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO'
import Order from '@modules/orders/infra/typeorm/entities/Order'
import IOrdersRepository from '../IOrdersRepository'

import { v4 as uuid } from 'uuid'

class FakeOrdersRepository implements IOrdersRepository {
  private orders: Order[] = []

  public async create(data: ICreateOrderDTO): Promise<Order> {
    const order = new Order()

    Object.assign(order, { id: uuid() }, data)

    this.orders.push(order)

    return order
  }

  public async findAll(): Promise<Order[] | undefined> {
    return this.orders
  }
}

export default FakeOrdersRepository
