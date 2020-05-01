import express from 'express';
import dotenv 'dotenv';
import path from 'path';

const root = path.join.bind(this,__dirname, '../../');
dotenv.config({ path: root('.env')});

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!')
})
app.listen(process.env.PORT, () =>{
  console.log(`Express server run https://${process.env.HOST}:${process.env.PORT}`)
})

process.env.NODE_ENV