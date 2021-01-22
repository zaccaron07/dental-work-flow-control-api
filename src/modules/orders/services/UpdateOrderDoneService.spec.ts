import CreateOrderService from '@modules/orders/services/CreateOrderService'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import UpdateOrderDoneService from './UpdateOrderDoneService'

describe('UpdateOrderDone', () => {
  it('should be able to update an order to done', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const createOrderService = new CreateOrderService(fakeOrdersRepository)
    const updateOrderDoneService = new UpdateOrderDoneService(fakeOrdersRepository)

    const order = await createOrderService.execute({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    const orderDone = await updateOrderDoneService.execute(order.id)

    expect(orderDone.done).toBe(true)
  })

  it('should not be able to update an order to done when it is already done', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const createOrderService = new CreateOrderService(fakeOrdersRepository)
    const updateOrderDoneService = new UpdateOrderDoneService(fakeOrdersRepository)

    const orderDoneSave = jest.spyOn(fakeOrdersRepository, 'save')

    const order = await createOrderService.execute({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: true,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    await updateOrderDoneService.execute(order.id)

    expect(orderDoneSave).not.toHaveBeenCalled()
  })

  it('should not be able to update a non existing order to done', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const updateOrderDoneService = new UpdateOrderDoneService(fakeOrdersRepository)

    expect(
      updateOrderDoneService.execute('non-existing-id')
    ).rejects.toBeInstanceOf(Error)
  })
})
