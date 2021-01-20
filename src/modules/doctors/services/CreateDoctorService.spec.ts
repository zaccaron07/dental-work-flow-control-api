import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository'
import CreateDoctorService from './CreateDoctorService'

describe('CreateDoctor', () => {
  it('should be able to create a doctor', async () => {
    const fakeDoctorsRepository = new FakeDoctorsRepository()
    const createDoctorService = new CreateDoctorService(fakeDoctorsRepository)

    const doctor = await createDoctorService.execute({
      name: 'John Doe',
      address: 'Street John',
      phone_number: '+5548998997844'
    })

    expect(doctor.name).toBe('John Doe')
    expect(doctor.address).toBe('Street John')
    expect(doctor.phone_number).toBe('+5548998997844')
    expect(doctor).toHaveProperty('id')
  })
})
