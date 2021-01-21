import CreateDoctorService from '@modules/orders/services/CreateOrderService'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'

describe('CreateOrder', () => {
  it('should be able to create a order', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const createOrdersService = new CreateDoctorService(fakeOrdersRepository)

    const order = await createOrdersService.execute({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id'
    })

    expect(order.name).toBe('Order #1')
    expect(order.done).toBe(false)
    expect(order.price).toBe(55)
    expect(order.doctor_id).toBe('doctor_id')
    expect(order.patient_id).toBe('patient_id')
    expect(order).toHaveProperty('entry_date')
    expect(order).toHaveProperty('due_date')
    expect(order).toHaveProperty('id')
  })
})
