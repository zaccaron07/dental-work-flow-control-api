import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import ListOrdersService from './ListOrdersService'

describe('ListOrders', () => {
  it('should be able to list all orders', async () => {
    const fakeOrdersRepository = new FakeOrdersRepository()
    const fakeCacheRepository = new FakeCacheProvider()
    const listOrdersService = new ListOrdersService(fakeOrdersRepository, fakeCacheRepository)

    const order1 = await fakeOrdersRepository.create({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id',
      user_id: 'user_id'
    })

    const order2 = await fakeOrdersRepository.create({
      name: 'Order #2',
      entry_date: new Date(),
      due_date: new Date(),
      done: false,
      price: 59,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id',
      user_id: 'user_id'
    })

    const orders = await listOrdersService.execute('user_id')

    expect(orders).toEqual([order1, order2])
  })
})
