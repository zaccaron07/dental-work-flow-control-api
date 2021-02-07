import { createConnections } from 'typeorm'

createConnections()
  .then(success => {
    console.log('Connection established with success:' + success)
  })
  .catch(error => {
    console.error('Error establishing the connection:' + error)
  })
