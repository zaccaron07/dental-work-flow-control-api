import Doctor from '../infra/typeorm/entities/Doctor'
import IDoctorsRepository from '../repositories/IDoctorsRepository'

class CreateDoctorService {
  constructor(
    private doctorsRepository: IDoctorsRepository
  ) { }

  async execute(): Promise<Doctor[] | undefined> {
    const doctors = await this.doctorsRepository.findAll()

    return doctors
  }
}

export default CreateDoctorService
