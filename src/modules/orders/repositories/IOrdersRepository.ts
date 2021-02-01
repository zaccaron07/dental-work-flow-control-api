import ICreateOrderDTO from '../dtos/ICreateOrderDTO'
import Order from '../infra/typeorm/entities/Order'

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>
  findAll(user_id: string): Promise<Order[]>
  findById(id: string): Promise<Order | undefined>
  delete(id: string): Promise<void>
  save(order: Order): Promise<Order>
}
