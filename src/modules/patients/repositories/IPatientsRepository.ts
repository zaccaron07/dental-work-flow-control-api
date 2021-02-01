import ICreatePatientDTO from '../dtos/ICreatePatientDTO'
import Patient from '../infra/typeorm/entities/Patient'

export default interface IPatientsRepository {
  create(data: ICreatePatientDTO): Promise<Patient>
  findAll(user_id: string): Promise<Patient[] | undefined>
}
