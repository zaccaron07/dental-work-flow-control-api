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

  public async findById(id: string): Promise<Order | undefined> {
    const order = this.orders.find(order => order.id === id)

    return order
  }

  public async delete(id: string): Promise<void> {
    const findIndex = this.orders.findIndex(order => order.id === id)

    this.orders.splice(findIndex, 1)
  }

  public async save(order: Order): Promise<Order> {
    const findIndex = this.orders.findIndex(findOrder => findOrder.id === order.id)

    this.orders[findIndex] = order

    return order
  }
}

export default FakeOrdersRepository
