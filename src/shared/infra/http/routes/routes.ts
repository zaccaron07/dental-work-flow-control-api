import patientsRouter from '@modules/patients/infra/http/routes/patients.routes'
import doctorsRouter from '@modules/doctors/infra/http/routes/doctors.routes'
import Router from 'express'

const routes = Router()

routes.use('/patients', patientsRouter)
routes.use('/doctors', doctorsRouter)

export default routes
