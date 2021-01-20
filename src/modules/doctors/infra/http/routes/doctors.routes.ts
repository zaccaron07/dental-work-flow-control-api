import Router from 'express'
import DoctorsController from '../controllers/DoctorsController'

const doctorsRouter = Router()

const doctorsController = new DoctorsController()

doctorsRouter.route('/')
  .post(doctorsController.create)
  .get(doctorsController.index)

export default doctorsRouter
