import { celebrate, Joi, Segments } from 'celebrate'
import Router from 'express'
import PatientsController from '../controllers/PatientsController'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticate'

const patientsRouter = Router()

const patientsController = new PatientsController()

patientsRouter.use(ensureAuthenticated)

patientsRouter.route('/')
  .post(
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        age: Joi.number().max(150).required(),
        address: Joi.string().required(),
        phone_number: Joi.string().required(),
        email: Joi.string().email().required()
      }
    }),
    patientsController.create
  )
  .get(patientsController.index)

export default patientsRouter
