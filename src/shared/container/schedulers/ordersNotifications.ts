import { inject, injectable } from 'tsyringe'

import CreateOrderNotificationService from '@modules/orders/services/CreateOrderNotificationService'
import ISChedulerProvider from '../providers/SchedulerProvider/models/ISchedulerProvider'

@injectable()
export default class OrdersNotifications {
  constructor(
    @inject('SchedulerProvider')
    private cronScheduler: ISChedulerProvider
  ) { }

  execute() {
    this.cronScheduler.schedule('0 0 * * *', CreateOrderNotificationService)
  }
}
