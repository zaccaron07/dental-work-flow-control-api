import CreatePatientService from '@modules/patients/services/CreatePatientService'
import ListPatientsService from '@modules/patients/services/ListPatientsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class PatientsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { name, age, address, phone_number, email } = request.body

    const createPatientService = container.resolve(CreatePatientService)

    const patient = await createPatientService.execute({ name, age, address, phone_number, email, user_id })

    return response.json(patient)
  }

  public async index (request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const listPatientsService = container.resolve(ListPatientsService)

    const patients = await listPatientsService.execute(user_id)

    return response.json(patients)
  }
}

export default PatientsController
