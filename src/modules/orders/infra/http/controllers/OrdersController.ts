import { container } from 'tsyringe'
import CreateOrderService from '@modules/orders/services/CreateOrderService'
import DeleteOrderService from '@modules/orders/services/DeleteOrderService'
import ListOrdersService from '@modules/orders/services/ListOrdersService'
import { Request, Response } from 'express'

class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, entry_date, due_date, price, done, doctor_id, patient_id } = request.body

    const createOrderService = container.resolve(CreateOrderService)

    const patient = await createOrderService.execute({ name, entry_date, due_date, price, done, doctor_id, patient_id })

    return response.json(patient)
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const listOrdersService = container.resolve(ListOrdersService)

    const orders = await listOrdersService.execute()

    return response.json(orders)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteOrderService = container.resolve(DeleteOrderService)

    deleteOrderService.execute(id)

    return response.status(204).json()
  }
}

export default OrdersController
