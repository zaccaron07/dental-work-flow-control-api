import { container } from 'tsyringe'

import IStorageProvider from './models/IStorageProvider'
import S3StorageProvider from './implementations/S3StorageProvider'

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  S3StorageProvider
)
