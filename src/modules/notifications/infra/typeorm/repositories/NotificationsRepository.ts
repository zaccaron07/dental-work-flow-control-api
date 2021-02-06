import { getMongoRepository, MongoRepository } from 'typeorm'

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification'
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository'
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO'

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo')
  }

  public async create({
    user_id,
    order_id,
    message
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      user_id,
      order_id,
      message
    })

    await this.ormRepository.save(notification)

    return notification
  }

  public async findByOrderId(order_id: string): Promise<Notification | undefined> {
    const notification = await this.ormRepository.findOne({ where: { order_id } })

    return notification
  }
}

export default NotificationsRepository
