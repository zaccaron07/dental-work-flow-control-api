import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository'
import CreateDoctorService from '@modules/doctors/services/CreateDoctorService'
import ListDoctorsService from '@modules/doctors/services/ListDoctorsService'
import { Request, Response } from 'express'

class DoctorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, address, phone_number } = request.body

    const doctorsRepository = new DoctorsRepository()
    const createDoctorService = new CreateDoctorService(doctorsRepository)

    const Doctor = await createDoctorService.execute({ name, address, phone_number })

    return response.json(Doctor)
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const doctorsRepository = new DoctorsRepository()
    const listDoctorsService = new ListDoctorsService(doctorsRepository)

    const Doctors = await listDoctorsService.execute()

    return response.json(Doctors)
  }
}

export default DoctorsController
