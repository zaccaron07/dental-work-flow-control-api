import Router from 'express'
import OrdersController from '../controllers/OrdersController'

const ordersRouter = Router()

const ordersController = new OrdersController()

ordersRouter.route('/')
  .post(ordersController.create)
  .get(ordersController.index)

ordersRouter.route('/:id')
  .delete(ordersController.delete)

export default ordersRouter
