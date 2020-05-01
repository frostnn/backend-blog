import express from 'express';
import dotenv 'dotenv';

dotenv.config({ path: '../.env'});

const app = express();
const port = 8888;
app.get('/', (request, response) => {
  response.send('Hello world!')
})
app.listen(port, () =>{
  console.log(`Express start port ${port}`)
})

process.env.NODE_ENV