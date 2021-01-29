import { celebrate, Joi, Segments } from 'celebrate'
import Router from 'express'
import DoctorsController from '../controllers/DoctorsController'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticate'

const doctorsRouter = Router()

const doctorsController = new DoctorsController()

doctorsRouter.use(ensureAuthenticated)

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
