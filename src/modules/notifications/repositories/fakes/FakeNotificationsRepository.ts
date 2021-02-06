import { ObjectID } from 'mongodb'

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification'
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository'
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO'

class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = []

  public async create({
    user_id,
    order_id,
    message
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification()

    Object.assign(notification, { id: new ObjectID(), user_id, order_id, message, read: false })

    this.notifications.push(notification)

    return notification
  }

  public async findByOrderId(order_id: string): Promise<Notification | undefined> {
    const findIndex = this.notifications.findIndex(notification => notification.order_id === order_id)

    return this.notifications[findIndex]
  }
}

export default FakeNotificationsRepository
