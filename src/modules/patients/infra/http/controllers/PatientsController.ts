import CreatePatientService from '@modules/patients/services/CreatePatientService'
import ListPatientsService from '@modules/patients/services/ListPatientsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class PatientsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createPatientService = container.resolve(CreatePatientService)

    const patient = await createPatientService.execute({ name })

    return response.json(patient)
  }

  public async index (_: Request, response: Response): Promise<Response> {
    const listPatientsService = container.resolve(ListPatientsService)

    const patients = await listPatientsService.execute()

    return response.json(patients)
  }
}

export default PatientsController
