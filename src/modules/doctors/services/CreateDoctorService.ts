import { inject, injectable } from 'tsyringe'
import Doctor from '../infra/typeorm/entities/Doctor'
import IDoctorsRepository from '../repositories/IDoctorsRepository'

interface IRequest {
  name: string
  address: string
  phone_number: string
  user_id: string
}

@injectable()
class CreateDoctorService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository
  ) { }

  async execute({ name, address, phone_number, user_id }: IRequest): Promise<Doctor> {
    const doctor = await this.doctorsRepository.create({ name, address, phone_number, user_id })

    return doctor
  }
}

export default CreateDoctorService
