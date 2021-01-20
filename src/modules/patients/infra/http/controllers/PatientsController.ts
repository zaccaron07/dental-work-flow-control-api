import PatientsRepository from '@modules/patients/infra/typeorm/repositories/PatientsRepository'
import CreatePatientService from '@modules/patients/services/CreatePatientService'
import ListPatientsService from '@modules/patients/services/ListPatientsService'
import { Request, Response } from 'express'

class PatientsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const patientsRepository = new PatientsRepository()
    const createPatientService = new CreatePatientService(patientsRepository)

    const patient = await createPatientService.execute({ name })

    return response.json(patient)
  }

  public async index (_: Request, response: Response): Promise<Response> {
    const patientsRepository = new PatientsRepository()
    const listPatientsService = new ListPatientsService(patientsRepository)

    const patients = await listPatientsService.execute()

    return response.json(patients)
  }
}

export default PatientsController
