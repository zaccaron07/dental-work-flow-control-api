import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from './routes/routes'

import '@shared/infra/typeorm'
import AppError from '@shared/errors/AppError'

const app = express()

app.use(cors({}))
app.use(express.json())
app.use(routes)
app.use(errors())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333)