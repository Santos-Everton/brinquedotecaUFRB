import express, {json} from 'express'
import "express-async-errors";
import { router } from './routers/index.js'
import handleErrors from './middleware/errorHandler.js';
import cors from 'cors'
import chalk from 'chalk'

const app = express()

app.use(json())
app.use(cors())
app.use(router)
app.use(handleErrors)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(chalk.blue('Servidor rodando na porta ', port))
})