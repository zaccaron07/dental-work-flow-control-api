import FakePatientsRepository from '../repositories/fakes/FakePatientsRepository'
import CreatePatientService from './CreatePatientService'

describe('CreatePatient', () => {
  it('should be able to create a patient', async () => {
    const fakePatientsRepository = new FakePatientsRepository()
    const createPatientsService = new CreatePatientService(fakePatientsRepository)

    const patient = await createPatientsService.execute({
      name: 'John Doe',
      age: 10,
      address: 'Street John Doe',
      email: 'john@gmail.com',
      phone_number: '7744',
      user_id: 'user-id'
    })

    expect(patient.name).toBe('John Doe')
    expect(patient.age).toBe(10)
    expect(patient.address).toBe('Street John Doe')
    expect(patient.email).toBe('john@gmail.com')
    expect(patient.phone_number).toBe('7744')
    expect(patient).toHaveProperty('id')
  })
})
