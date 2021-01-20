import { v4 as uuid } from 'uuid'
import ICreateDoctorDTO from "@modules/doctors/dtos/ICreateDoctorDTO";
import Doctor from "@modules/doctors/infra/typeorm/entities/Doctor";
import IDoctorsRepository from "../IDoctorsRepository";

class FakeDoctorsRepository implements IDoctorsRepository {
  private doctors: Doctor[] = []

  public async create(data: ICreateDoctorDTO): Promise<Doctor> {
    const doctor = new Doctor()

    Object.assign(doctor, { id: uuid() }, data)

    this.doctors.push(doctor)

    return doctor
  }

  public async findAll(): Promise<Doctor[] | undefined> {
    return this.doctors
  }

}

export default FakeDoctorsRepository