import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import "dotenv"

//import routers here

const server = express()
// const PORT = process.env.PORT || 8000

server.use(express.json())
server.use(helmet())
server.use(cors())
//userouters


server.get('/', (req, res) => {
  res.json({ message: "Hello World "}) 
})


server.listen(process.env.PORT, () => {
  console.log(`\n=== Server listening on port ${process.env.PORT} ===\n`)
});


