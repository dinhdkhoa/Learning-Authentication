import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 4000

//Setup Static path to public folder
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
// app.use(morgan("combined"))

//Middleware
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//Template Engine
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
