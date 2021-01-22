import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository'
import UpdateOrderDoneService from '@modules/orders/services/UpdateOrderDoneService'
import { Request, Response } from 'express'

class OrderDoneController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const ordersRepository = new OrdersRepository()
    const updateOrderDoneService = new UpdateOrderDoneService(ordersRepository)

    const order = await updateOrderDoneService.execute(id)

    return response.json(order)
  }
}

export default OrderDoneController
