import { container } from 'tsyringe'

import OrdersNotifications from './ordersNotifications'

const orderNotificationTask = container.resolve(OrdersNotifications)

orderNotificationTask.execute()
