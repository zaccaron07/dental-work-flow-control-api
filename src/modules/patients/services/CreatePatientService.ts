import { inject, injectable } from 'tsyringe'
import Patient from '../infra/typeorm/entities/Patient'
import IPatientsRepository from '../repositories/IPatientsRepository'

interface IRequest {
  name: string
  user_id: string
}

@injectable()
class CreatePatientService {
  constructor (
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository
  ) { }

  async execute ({ name, user_id }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.create({ name, user_id })

    return patient
  }
}

export default CreatePatientService
