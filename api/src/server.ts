import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.json({
            error: err.message
        })
    } else {
        return response.json({
            error: 'internal server error',
            err: err
        })
    }
   
})

app.listen(3001, () => {
    console.log('rodando')
})