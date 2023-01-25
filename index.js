const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jira docs',
      version: '1.0.0',
    },
  },
  apis: ['./*.js'],
}
const swaggerSpec = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

/**
 * @openapi
 * /:
 *  get:
 *    description: get nef
 *    responses:
 *      200:
 *        description: get nef string
 */
app.get('/', (req, res) => {
  res.send('GET nef')
})
/**
 * @openapi
 * /:
 *  post:
 *    description: nef
 *    responses:
 *      200:
 *        description: post nef string
 */
app.post('/', (req, res) => {
  res.send('POST nef')
})
/**
 * @openapi
 * /:
 *  put:
 *    description: nef
 *    responses:
 *      200:
 *        description: put nef string
 */
app.put('/', (req, res) => {
  res.send('PUT nef')
})
/**
 * @openapi
 * /:
 *  delete:
 *    description: nef
 *    responses:
 *      200:
 *        description: delete nef string
 */
app.delete('/', (req, res) => {
  res.send('DELETE nef')
})

const port = 3000
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
