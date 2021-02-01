import CreateDoctorService from '@modules/doctors/services/CreateDoctorService'
import ListDoctorsService from '@modules/doctors/services/ListDoctorsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class DoctorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const { name, address, phone_number } = request.body

    const createDoctorService = container.resolve(CreateDoctorService)

    const Doctor = await createDoctorService.execute({ name, address, phone_number, user_id })

    return response.json(Doctor)
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const listDoctorsService = container.resolve(ListDoctorsService)

    const Doctors = await listDoctorsService.execute(user_id)

    return response.json(Doctors)
  }
}

export default DoctorsController
