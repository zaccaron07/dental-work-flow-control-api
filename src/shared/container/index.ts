import { container } from 'tsyringe'

import '@modules/users/providers'

import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository'
import PatientsRepository from '@modules/patients/infra/typeorm/repositories/PatientsRepository'

import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository'
import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

container.registerSingleton<IDoctorsRepository>(
  'DoctorsRepository',
  DoctorsRepository,
)

container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)