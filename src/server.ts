import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({ message: "Works!" })
})

app.listen(3333)