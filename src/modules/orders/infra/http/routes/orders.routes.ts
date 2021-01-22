import Router from 'express'
import OrderDoneController from '../controllers/OrderDoneController'
import OrdersController from '../controllers/OrdersController'

const ordersRouter = Router()

const ordersController = new OrdersController()
const orderDoneController = new OrderDoneController()

ordersRouter.route('/')
  .post(ordersController.create)
  .get(ordersController.index)

ordersRouter.route('/:id')
  .delete(ordersController.delete)

ordersRouter.patch('/:id/done', orderDoneController.update)

export default ordersRouter
