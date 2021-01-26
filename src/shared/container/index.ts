import { container } from 'tsyringe'

import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository'
import PatientsRepository from '@modules/patients/infra/typeorm/repositories/PatientsRepository'

import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository'
import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository'

container.registerSingleton<IDoctorsRepository>(
  'DoctorsRepository',
  DoctorsRepository,
)

container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
)