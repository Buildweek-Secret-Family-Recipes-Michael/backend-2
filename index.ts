import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

//import routers here

const server = express()
const PORT = process.env.PORT || 8000

server.use(express.json())
server.use(helmet())
server.use(cors())
//userouters

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});


server.get('/', (req, res) => {
    res.json({ message: "Hello World "})  //testing out that insomnia works
})