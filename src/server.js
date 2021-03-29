const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.send('Hello express!')
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
