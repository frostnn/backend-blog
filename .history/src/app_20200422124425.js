import express from 'express';
import dotenv 'dotenv';
import path from 'path';
import cors from 'cors';

const root = path.join.bind(this,__dirname, '../../');
dotenv.config({ path: root('.env')});

// Данные

// Посты
 

const app = express();
app.use(cors())
app.get('/', (request, response) => {
  response.send('Hello world!')
})

app.use('*', (request, response) =>{
  response.status(404).send('Endpoint not found on server!')
})

app.listen(process.env.PORT, () =>{
  console.log(`Express server run https://${process.env.HOST}:${process.env.PORT}`)
})

process.env.NODE_ENV