const path = require('path')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

//Static directory
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// EJS
app.use(expressLayouts)
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'ejs')

// Routes
app.use('/api/passport', require('./routes/index'))
app.use('/api/passport/users', require('./routes/userRoutes'))

// Port and server start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
