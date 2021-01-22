import ICreateOrderDTO from '../dtos/ICreateOrderDTO'
import Order from '../infra/typeorm/entities/Order'

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>
  findAll(): Promise<Order[] | undefined>
  findById(id: string): Promise<Order | undefined>
  delete(id: string): Promise<void>
  save(order: Order): Promise<Order>
}
