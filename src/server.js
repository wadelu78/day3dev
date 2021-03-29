const path = require('path')
const express = require('express')

const port = process.env.PORT || 5000

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.send('Hello express!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
