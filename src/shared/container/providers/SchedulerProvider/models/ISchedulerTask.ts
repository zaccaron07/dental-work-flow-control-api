export default interface ISchedulerTask {
  execute(): Promise<void>
}
