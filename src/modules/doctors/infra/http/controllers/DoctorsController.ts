import CreateDoctorService from '@modules/doctors/services/CreateDoctorService'
import ListDoctorsService from '@modules/doctors/services/ListDoctorsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class DoctorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, address, phone_number } = request.body

    const createDoctorService = container.resolve(CreateDoctorService)

    const Doctor = await createDoctorService.execute({ name, address, phone_number })

    return response.json(Doctor)
  }

  public async index(_: Request, response: Response): Promise<Response> {
    const listDoctorsService = container.resolve(ListDoctorsService)

    const Doctors = await listDoctorsService.execute()

    return response.json(Doctors)
  }
}

export default DoctorsController
