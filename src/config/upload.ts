import { resolve } from 'path'
import crypto from 'crypto'
import multer from 'multer'

const tmpFolder = resolve(__dirname, '..', '..', 'tmp')

interface IUploadConfig {
  driver: 's3'

  tmpFolder: string
  uploadsFolder: string
  multer: {
    storage: multer.StorageEngine
  }
  config: {
    aws: {
      bucket: string
    }
  }
}

export default {
  driver: process.env.STORAGE_DRIVER,
  tmpFolder,
  uploadsFolder: resolve(tmpFolder, 'uploads'),
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(_, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`

        return callback(null, fileName)
      }
    })
  },
  config: {
    aws: {
      bucket: process.env.AWS_BUCKET
    }
  }
} as IUploadConfig
