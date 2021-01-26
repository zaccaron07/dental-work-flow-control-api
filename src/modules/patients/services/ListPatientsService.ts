import { inject, injectable } from 'tsyringe';
import Patient from '../infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

@injectable()
class ListPatientsService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository
  ) { }

  async execute(): Promise<Patient[] | undefined> {
    const patients = await this.patientsRepository.findAll()

    return patients
  }
}

export default ListPatientsService