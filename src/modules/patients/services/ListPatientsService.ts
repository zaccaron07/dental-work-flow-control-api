import Patient from '../infra/typeorm/entities/Patient';
import IPatientsRepository from '../repositories/IPatientsRepository';

class ListPatientsService {
  constructor(
    private patientsRepository: IPatientsRepository
  ) { }

  async execute(): Promise<Patient[] | undefined> {
    const patients = await this.patientsRepository.findAll()

    return patients
  }
}

export default ListPatientsService