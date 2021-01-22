import { celebrate, Joi, Segments } from 'celebrate'
import Router from 'express'
import PatientsController from '../controllers/PatientsController'

const patientsRouter = Router()

const patientsController = new PatientsController()

patientsRouter.route('/')
  .post(
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required()
      }
    }),
    patientsController.create
  )
  .get(patientsController.index)

export default patientsRouter
