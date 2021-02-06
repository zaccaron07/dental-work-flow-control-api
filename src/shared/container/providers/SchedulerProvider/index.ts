import { container } from 'tsyringe'

import ISchedulerProvider from './models/ISchedulerProvider'
import CronSchedulerProvider from './implementations/CronSchedulerProvider'

container.registerSingleton<ISchedulerProvider>(
  'SchedulerProvider',
  CronSchedulerProvider
)
