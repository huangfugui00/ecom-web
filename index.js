const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const DBConnection = require('./config/db')
const consoleMiddle = require('./middleware/consoleMid')

const AdminBro  = require('admin-bro');
const AdminOption = require('./config/admin')
const adminRouter = require('./route/admin')
const productRouter = require('./route/product')
DBConnection()

const app = express();
const admin  = new AdminBro(AdminOption)
app.use(admin.options.rootPath, adminRouter(admin))
app.use(express.static('./'))
app.use(consoleMiddle)
app.use(express.json())
app.use(cors())


const versionOne = (routeName) => `/${routeName}`
app.use(versionOne('product'), productRouter)


const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(port))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
})
