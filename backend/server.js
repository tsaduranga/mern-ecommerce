import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';


const app = express();
dotenv.config()
connectDB()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Api / runingss')
})


app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5002, console.log("server start at "))