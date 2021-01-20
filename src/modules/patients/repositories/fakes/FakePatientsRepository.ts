import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO'
import Patient from '@modules/patients/infra/typeorm/entities/Patient'
import IPatientsRepository from '../IPatientsRepository'

import { v4 as uuid } from 'uuid'

class FakePatientsRepository implements IPatientsRepository {
  private patients: Patient[] = []

  public async create (data: ICreatePatientDTO): Promise<Patient> {
    const patient = new Patient()

    Object.assign(patient, { id: uuid() }, data)

    this.patients.push(patient)

    return patient
  }

  public async findAll (): Promise<Patient[] | undefined> {
    return this.patients
  }
}

export default FakePatientsRepository
