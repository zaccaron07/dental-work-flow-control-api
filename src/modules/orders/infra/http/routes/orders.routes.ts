import { celebrate, Joi, Segments } from 'celebrate'
import Router from 'express'
import OrderDoneController from '../controllers/OrderDoneController'
import OrdersController from '../controllers/OrdersController'

const ordersRouter = Router()

const ordersController = new OrdersController()
const orderDoneController = new OrderDoneController()

ordersRouter.route('/')
  .post(
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        doctor_id: Joi.string().uuid().required(),
        patient_id: Joi.string().uuid().required(),
        entry_date: Joi.date().required(),
        due_date: Joi.date().required(),
        price: Joi.number().required(),
        done: Joi.boolean().required()
      }
    }),
    ordersController.create
  )
  .get(ordersController.index)

ordersRouter.route('/:id')
  .delete(
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    }),
    ordersController.delete
  )

ordersRouter.patch(
  '/:id/done',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  orderDoneController.update
)

export default ordersRouter
