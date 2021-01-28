import IHashProvider from '../models/IHashProvider'

export default class FakeHashProvider implements IHashProvider {
  public async generateHash (payload: string): Promise<string> {
    return payload
  }

  public async compareHash (payload: string, hashed: string) {
    return payload === hashed
  }
}
