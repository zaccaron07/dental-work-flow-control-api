import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository'
import CreateOrderService from '@modules/orders/services/CreateOrderService'
import ListOrdersService from '@modules/orders/services/ListOrdersService'
import { Request, Response } from 'express'

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, entry_date, due_date, price, done, doctor_id, patient_id } = request.body

    const ordersRepository = new OrdersRepository()
    const createOrderService = new CreateOrderService(ordersRepository)

    const patient = await createOrderService.execute({ name, entry_date, due_date, price, done, doctor_id, patient_id })

    return response.json(patient)
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const ordersRepository = new OrdersRepository()
    const listOrdersService = new ListOrdersService(ordersRepository)

    const orders = await listOrdersService.execute()

    return response.json(orders)
  }
}

export default OrdersController
