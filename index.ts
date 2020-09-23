import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

//import routers here

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
//userouters


server.get('/', (req, res) => {
  res.json({ message: "Hello World "}) 
})

const port = process.env.PORT || 8000

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`)
});

// server.listen(process.env.PORT, () => {
//   console.log("hello")
// });



