import express, { response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './src/routes/user.js'
import bookRouter from './src/routes/book.js'
import logger from './src/middlewares/logger.js'

dotenv.config()

const {
    PORT = 3000,
    API_URL,
    DB_URL 
} = process.env

const app = express()

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json())
app.use('/', userRouter)
app.use('/', bookRouter)
app.use(logger)

mongoose.connect(DB_URL, (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Connected to database');
})
app.listen(PORT, () => console.log(`Server started on ${API_URL}:${PORT}`))
