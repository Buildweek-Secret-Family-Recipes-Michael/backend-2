import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieparser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config()

import { userRouter } from "./src/routers/user-router"

export const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(cookieparser())
server.use(userRouter)


server.get('/', async (req, res) => {
  res.json({ message: "Hello World "}) 
})

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`)
});





