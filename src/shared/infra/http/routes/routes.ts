import patientsRouter from '@modules/patients/infra/http/routes/patients.routes'
import doctorsRouter from '@modules/doctors/infra/http/routes/doctors.routes'
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import Router from 'express'

const routes = Router()

routes.use('/patients', patientsRouter)
routes.use('/doctors', doctorsRouter)
routes.use('/orders', ordersRouter)
routes.use('/users', usersRouter)

export default routes
