import { celebrate, Joi, Segments } from 'celebrate'
import Router from 'express'
import DoctorsController from '../controllers/DoctorsController'

const doctorsRouter = Router()

const doctorsController = new DoctorsController()

doctorsRouter.route('/')
  .post(
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        address: Joi.string().required(),
        phone_number: Joi.string().required()
      }
    }),
    doctorsController.create
  )
  .get(doctorsController.index)

export default doctorsRouter
