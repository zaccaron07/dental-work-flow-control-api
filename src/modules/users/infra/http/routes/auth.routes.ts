import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import AuthController from '@modules/users/infra/http/controllers/AuthController'

const sessionsRouter = Router()
const authController = new AuthController()

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
  authController.create
)

export default sessionsRouter
