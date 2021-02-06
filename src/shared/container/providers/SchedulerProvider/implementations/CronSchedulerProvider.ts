import cron from 'node-cron'
import { container } from 'tsyringe'

import ISChedulerProvider from '../models/ISchedulerProvider'
import ISchedulerTask from '../models/ISchedulerTask'

export default class CronSchedulerProvider implements ISChedulerProvider {
  public async schedule(time: string, task: any) {
    cron.schedule(time, () => {
      const taskToExecute: ISchedulerTask = container.resolve(task)

      taskToExecute.execute()
    }, {
      timezone: 'America/Sao_Paulo'
    })
  }
}
