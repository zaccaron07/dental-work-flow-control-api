import { inject, injectable } from 'tsyringe'
import Doctor from '../infra/typeorm/entities/Doctor'
import IDoctorsRepository from '../repositories/IDoctorsRepository'

@injectable()
class CreateDoctorService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository
  ) { }

  async execute(user_id: string): Promise<Doctor[] | undefined> {
    const doctors = await this.doctorsRepository.findAll(user_id)

    return doctors
  }
}

export default CreateDoctorService
