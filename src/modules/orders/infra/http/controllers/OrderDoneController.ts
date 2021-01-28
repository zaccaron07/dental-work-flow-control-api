import { container } from 'tsyringe'
import UpdateOrderDoneService from '@modules/orders/services/UpdateOrderDoneService'
import { Request, Response } from 'express'

class OrderDoneController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const updateOrderDoneService = container.resolve(UpdateOrderDoneService)

    const order = await updateOrderDoneService.execute(id)

    return response.json(order)
  }
}

export default OrderDoneController
