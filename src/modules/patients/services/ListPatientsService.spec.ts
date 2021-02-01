import FakePatientsRepository from "../repositories/fakes/FakePatientsRepository"
import CreatePatientService from "./CreatePatientService"
import ListPatientsService from "./ListPatientsService"

describe('ListPatients', () => {
  it('should be able to list all patients', async () => {
    let fakePatientsRepository = new FakePatientsRepository()
    let createPatientService = new CreatePatientService(fakePatientsRepository)
    let listPatientsService = new ListPatientsService(fakePatientsRepository)

    const patient1 = await createPatientService.execute({
      name: 'John Doe',
      user_id: 'user_id'
    })

    const patient2 = await createPatientService.execute({
      name: 'John Tre',
      user_id: 'user_id'
    })

    const patients = await listPatientsService.execute('user_id')

    expect(patients).toEqual([patient1, patient2])
  })
})