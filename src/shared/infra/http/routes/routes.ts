import patientsRouter from '@modules/patients/infra/http/routes/patients.routes'
import Router from 'express'

const routes = Router()

routes.use('/patients', patientsRouter)

export default routes
