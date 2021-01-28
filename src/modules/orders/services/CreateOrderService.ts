import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  entry_date: Date
  due_date: Date
  price: number
  done: boolean
  doctor_id: string
  patient_id: string
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository
  ) { }

  async execute({ name, entry_date, due_date, price, done, doctor_id, patient_id }: IRequest): Promise<Order> {
    const patient = await this.ordersRepository.create({ name, entry_date, due_date, price, done, doctor_id, patient_id })

    return patient
  }
}

export default CreateOrderService
