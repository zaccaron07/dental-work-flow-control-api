import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository'
import CreateDoctorService from './CreateDoctorService'
import ListDoctorsService from './ListDoctorsService'

describe('ListDoctors', () => {
  it('should be able to list all doctors', async () => {
    let fakeDoctorsRepository = new FakeDoctorsRepository()
    let createDoctorService = new CreateDoctorService(fakeDoctorsRepository)
    let listDoctorsService = new ListDoctorsService(fakeDoctorsRepository)

    const doctor1 = await createDoctorService.execute({
      name: 'John Doe2',
      address: 'Street John2',
      phone_number: '+5548998997844'
    })

    const doctor2 = await createDoctorService.execute({
      name: 'John Doe2',
      address: 'Street John2',
      phone_number: '+5548998997844'
    })

    const doctors = await listDoctorsService.execute()

    expect(doctors).toEqual([doctor1, doctor2])
  })
})