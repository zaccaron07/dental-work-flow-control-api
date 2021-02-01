import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO'
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository'
import { getRepository, Repository } from 'typeorm'
import Doctor from '../entities/Doctor'

class DoctorsRepository implements IDoctorsRepository {
  private ormRepository: Repository<Doctor>

  constructor() {
    this.ormRepository = getRepository(Doctor)
  }

  public async create(doctorData: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = this.ormRepository.create(doctorData)

    await this.ormRepository.save(doctor)

    return doctor
  }

  public async findAll(user_id: string): Promise<Doctor[] | undefined> {
    const doctors = await this.ormRepository.find({ where: { user_id } })

    return doctors
  }
}

export default DoctorsRepository
