import CreateDoctorService from '@modules/orders/services/CreateOrderService'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import ListOrdersService from './ListOrdersService'

describe('ListOrders', () => {
  it('should be able to list all orders', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const listOrdersService = new ListOrdersService(fakeOrdersRepository)
    const createOrdersService = new CreateDoctorService(fakeOrdersRepository)

    const order1 = await createOrdersService.execute({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    const order2 = await createOrdersService.execute({
      name: 'Order #2',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 59,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    const orders = await listOrdersService.execute()

    expect(orders).toEqual([order1, order2])
  })
})
