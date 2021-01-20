import FakePatientsRepository from '../repositories/fakes/FakePatientsRepository'
import CreatePatientService from './CreatePatientService'

describe('CreatePatient', () => {
  it('should be able to create a patient', async () => {
    const fakePatientsRepository = new FakePatientsRepository()
    const createPatientsService = new CreatePatientService(fakePatientsRepository)

    const patient = await createPatientsService.execute({
      name: 'John Doe'
    })

    expect(patient.name).toBe('John Doe')
    expect(patient).toHaveProperty('id')
  })
})
