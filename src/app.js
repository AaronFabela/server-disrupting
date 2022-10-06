import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import productsRoutes from './routes/Products.routes.js'
import authRoutes from './routes/Auth.routes.js'

const app = express()

// Settings
app.use(cors())
app.use(morgan('dev'))

// Middlewares
app.use(express.json())

// Routes
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

export default app
