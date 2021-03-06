import express, { request } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const root = path.join.bind(this,__dirname, '../');
dotenv.config({ path: root('.env')});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Данные

// Посты



// Endpoints



app.use('*', (request, response) =>{
  response.status(404).send('Endpoint not found on server!')
});

app.listen(process.env.PORT, () =>{
  console.log(`Express server run https://${process.env.HOST}:${process.env.PORT}`)
});

process.env.NODE_ENV