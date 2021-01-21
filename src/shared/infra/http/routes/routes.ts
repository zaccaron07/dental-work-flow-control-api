import patientsRouter from '@modules/patients/infra/http/routes/patients.routes'
import doctorsRouter from '@modules/doctors/infra/http/routes/doctors.routes'
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes'
import Router from 'express'

const routes = Router()

routes.use('/patients', patientsRouter)
routes.use('/doctors', doctorsRouter)
routes.use('/orders', ordersRouter)

export default routes
