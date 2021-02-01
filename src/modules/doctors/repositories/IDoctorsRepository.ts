import ICreateDoctorDTO from '../dtos/ICreateDoctorDTO'
import Doctor from '../infra/typeorm/entities/Doctor'

export default interface IDoctorsRepository {
  create(data: ICreateDoctorDTO): Promise<Doctor>
  findAll(user_id: string): Promise<Doctor[] | undefined>
}
