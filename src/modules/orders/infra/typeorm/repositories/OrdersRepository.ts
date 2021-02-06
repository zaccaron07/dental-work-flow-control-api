import { endOfDay, startOfDay } from 'date-fns'
import { Between, getRepository, Repository } from 'typeorm'

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO'
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository'
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

  public async findAll(user_id: string): Promise<Order[]> {
    const orders = await this.ormRepository.find({ where: { user_id } })

    return orders
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id)

    return order
  }

  public async findOrdersThatExpireToday(): Promise<Order[]> {
    const currentDate = new Date()

    const orders = await this.ormRepository.find({
      where: {
        due_date: Between(startOfDay(currentDate), endOfDay(currentDate))
      }
    })

    return orders
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }

  public async save(order: Order): Promise<Order> {
    await this.ormRepository.save(order)

    return order
  }
}

export default OrdersRepository
