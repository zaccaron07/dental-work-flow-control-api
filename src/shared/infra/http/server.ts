import express from 'express'
import 'express-async-errors'

import routes from './routes/routes'

import '@shared/infra/typeorm'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)