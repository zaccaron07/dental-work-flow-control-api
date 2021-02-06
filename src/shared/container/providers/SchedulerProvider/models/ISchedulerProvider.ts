export default interface ISChedulerProvider {
  schedule(time: string, task: any): void
}
