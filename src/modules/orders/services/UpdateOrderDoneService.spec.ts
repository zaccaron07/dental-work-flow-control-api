import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'
import AppError from '@shared/errors/AppError'
import FakeOrdersRepository from '../repositories/fakes/FakeOrdersRepository'
import UpdateOrderDoneService from './UpdateOrderDoneService'

let fakeOrdersRepository: FakeOrdersRepository
let fakeCacheProvider: FakeCacheProvider
let updateOrderDoneService: UpdateOrderDoneService

describe('UpdateOrderDone', () => {
  beforeEach(() => {
    fakeOrdersRepository = new FakeOrdersRepository()
    fakeCacheProvider = new FakeCacheProvider()
    updateOrderDoneService = new UpdateOrderDoneService(fakeOrdersRepository, fakeCacheProvider)
  })

  it('should be able to update an order to done', async () => {
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

    const orderDone = await updateOrderDoneService.execute({ id: order.id, user_id: 'user_id' })

    expect(orderDone.done).toBe(true)
  })

  it('should not be able to update an order to done when it is already done', async () => {
    const orderDoneSave = jest.spyOn(fakeOrdersRepository, 'save')

    const order = await fakeOrdersRepository.create({
      name: 'Order #1',
      entry_date: new Date(),
      due_date: new Date(),
      done: true,
      price: 55,
      doctor_id: 'doctor_id',
      patient_id: 'patient_id',
      user_id: 'user_id'
    })

    await updateOrderDoneService.execute({ id: order.id, user_id: 'user_id' })

    expect(orderDoneSave).not.toHaveBeenCalled()
  })

  it('should not be able to update a non existing order to done', async () => {
    expect(
      updateOrderDoneService.execute({ id: 'non-existing-id', user_id: 'user_id' })
    ).rejects.toBeInstanceOf(AppError)
  })
})
