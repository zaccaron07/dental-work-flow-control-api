import Patient from '../infra/typeorm/entities/Patient'
import IPatientsRepository from '../repositories/IPatientsRepository'

interface IRequest {
  name: string
}

class CreatePatientService {
  constructor (
    private patientsRepository: IPatientsRepository
  ) { }

  async execute ({ name }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.create({ name })

    return patient
  }
}

export default CreatePatientService
