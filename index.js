
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var path = require('path')
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, './public')))

const mainRoutes = require('./api/index')


app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})


app.use('/', mainRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })