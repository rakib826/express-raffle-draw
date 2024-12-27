const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use([morgan('dev'), cors(), express.json()])

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Success' })
})

/**
 * this is a test function
 * @param {string} name pass your name
 * @return {boolean}
 */

function testFun(name){
  name.
}


app.use((req, res, next) => {
  const error = new Error('Resource Not Found') // Corrected typo here
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    })
  }
  res.status(500).json({ message: 'Something Went Wrong' })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log("Server is listening on port ", port)
})