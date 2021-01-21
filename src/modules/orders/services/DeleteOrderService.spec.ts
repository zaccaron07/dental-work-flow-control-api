import CreateDoctorService from '@modules/orders/services/CreateOrderService'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import DeleteOrderService from './DeleteOrderService'
import ListOrdersService from './ListOrdersService'

describe('DeleteOrder', () => {
  it('should be able to delete an order', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const createOrdersService = new CreateDoctorService(fakeOrdersRepository)
    const deleteOrderService = new DeleteOrderService(fakeOrdersRepository)
    const listOrdersService = new ListOrdersService(fakeOrdersRepository)

    const deleteOrder = jest.spyOn(fakeOrdersRepository, 'delete')

    const order = await createOrdersService.execute({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    await deleteOrderService.execute(order.id)

    const orders = await listOrdersService.execute()

    expect(deleteOrder).toHaveBeenCalledWith(order.id)
    expect(orders).toEqual([])
  })
})
