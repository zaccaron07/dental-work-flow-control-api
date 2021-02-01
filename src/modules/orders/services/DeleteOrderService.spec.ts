import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import DeleteOrderService from './DeleteOrderService'

describe('DeleteOrder', () => {
  it('should be able to delete an order', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const fakeCacheProvider = new FakeCacheProvider()
    const deleteOrderService = new DeleteOrderService(fakeOrdersRepository, fakeCacheProvider)

    const deleteOrder = jest.spyOn(fakeOrdersRepository, 'delete')

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

    await deleteOrderService.execute({ id: order.id, user_id: 'user_id' })

    const orders = await fakeOrdersRepository.findAll('user_id')

    expect(deleteOrder).toHaveBeenCalledWith(order.id)
    expect(orders).toEqual([])
  })
})
