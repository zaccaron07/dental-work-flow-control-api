import { inject, injectable } from 'tsyringe'
import Doctor from '../infra/typeorm/entities/Doctor'
import IDoctorsRepository from '../repositories/IDoctorsRepository'

interface IRequest {
  name: string
  address: string
  phone_number: string
}

@injectable()
class CreateDoctorService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository
  ) { }

  async execute({ name, address, phone_number }: IRequest): Promise<Doctor> {
    const doctor = await this.doctorsRepository.create({ name, address, phone_number })

    return doctor
  }
}

export default CreateDoctorService
