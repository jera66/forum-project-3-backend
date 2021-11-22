// ///////////////////////////
// Dependencies
// ///////////////////////////

// Getting .env variables
require('dotenv').config()
// Pulling PORT from .env, giving it a default of 3002 (object destructuring)
const { PORT = 3002, DATABASE_URL } = process.env
// Importing express
const express = require('express')
// Creating  the application object
const app = express()
// Importing mongoose
const mongoose = require('mongoose')
// Importing middleware
const cors = require('cors')
const morgan = require('morgan')

// ///////////////////////////////
// Database Connection
// //////////////////////////////
// Establishing connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Connection Events
mongoose.connection
  .on('open', () => console.log('You are connected to Mongo'))
  .on('close', () => console.log('You are disconnected from Mongo'))
  .on('error', error => console.log(error))

/*          MONGOOSE            */
const MessageSchema = new mongoose.Schema(
  {
    userName: String,
    image: String,
    about: String,
    date: String,
    time: String,
    message: String,
    url: String,
    startRating: Number
  },
  { timestamps: true }
)

const Message = mongoose.model('Message', MessageSchema)

// ///////////////////////////////
// Middleware
// ////////////////////////////////
app.use(cors()) // Preventing cors errors, opening up access for frontend
app.use(morgan('dev')) // Logging
app.use(express.json()) // Parsing json bodies

// //////////////////////////////
// Routes
// //////////////////////////////
// Setting up a test route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Index route
app.get('/forum', async (req, res) => {
  try {
    res.json(await Message.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Create route
app.post('/forum', async (req, res) => {
  try {
    res.json(await Message.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update route
app.put('/forum/:id', async (req, res) => {
  const id = req.params.id
  try {
    res.json(await Message.findByIdAndUpdate(id, req.body, { new: true }))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Destroy route
app.delete('/forum/:id', async (req, res) => {
  const id = req.params.id
  try {
    res.json(await Message.findByIdAndRemove(id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// ///////////////////////////////
// Server Listener
// ///////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})
