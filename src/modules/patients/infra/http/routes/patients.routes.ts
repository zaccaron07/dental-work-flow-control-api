import Router from 'express'
import PatientsController from '../controllers/PatientsController'

const patientsRouter = Router()

const patientsController = new PatientsController()

patientsRouter.route('/')
  .post(patientsController.create)
  .get(patientsController.index)

export default patientsRouter
