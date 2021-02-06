import { inject, injectable } from 'tsyringe'

import IOrdersRepository from '../repositories/IOrdersRepository'
import ISchedulerTask from '@shared/container/providers/SchedulerProvider/models/ISchedulerTask';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

@injectable()
class CreateOrderNotificationService implements ISchedulerTask {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository
  ) { }

  async execute(): Promise<void> {
    const ordersThatExpireToday = await this.ordersRepository.findOrdersThatExpireToday()

    for (const order of ordersThatExpireToday) {
      const { user_id, id, name } = order

      const notificationExists = await this.notificationsRepository.findByOrderId(id)

      if (!notificationExists) {
        this.notificationsRepository.create({ user_id, order_id: id, message: `A ordem ${name} precisa ser entregue hoje!` })
      }
    }
  }
}

export default CreateOrderNotificationService
