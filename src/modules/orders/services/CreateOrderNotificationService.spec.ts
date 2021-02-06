import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import CreateOrderNotificationService from './CreateOrderNotificationService'

describe('CreateOrderNotification', () => {
  it('should be able to create a notification for an order', async () => {
    const fakeNotificationsRepository = new FakeNotificationsRepository()
    const fakeOrdersRepository = new FakeOrdersRepository()
    const createOrderNotificationService = new CreateOrderNotificationService(fakeOrdersRepository, fakeNotificationsRepository)

    const order = await fakeOrdersRepository.create({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id',
      user_id: 'user_id'
    })

    await createOrderNotificationService.execute()

    const orderNotification = await fakeNotificationsRepository.findByOrderId(order.id)

    expect(orderNotification?.message).toBe(`A ordem ${order.name} precisa ser entregue hoje!`)
    expect(orderNotification?.read).toBe(false)
    expect(orderNotification?.user_id).toBe('user_id')
  })
})
