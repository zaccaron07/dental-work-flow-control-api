import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO'
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository'
import { getRepository, Repository } from 'typeorm'
import Patient from '../entities/Patient'

class PatientsRepository implements IPatientsRepository {
  private ormRepository: Repository<Patient>

  constructor () {
    this.ormRepository = getRepository(Patient)
  }

  public async create (patientData: ICreatePatientDTO): Promise<Patient> {
    const patient = this.ormRepository.create(patientData)

    await this.ormRepository.save(patient)

    return patient
  }

  public async findAll (): Promise<Patient[] | undefined> {
    const patients = await this.ormRepository.find()

    return patients
  }
}

export default PatientsRepository
