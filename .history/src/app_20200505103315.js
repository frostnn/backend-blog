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


app.get('/posts', (request, response ) => {
  response.json(posts)
});

app.post('/posts', (request, response ) => {
  posts.push(request.body)

  response.json({status: true, post: request.body})
});

app.put('/posts', (request, response ) => {
  const index = posts.findIndex((p) => +p.id === +request.query.id);
  if(index === -1) {
    response.status(401).json({ status: false, message: 'Post not found on server!' })
  }
  posts[index].header = request.body.header;
  posts[index].content = request.body.content;
  response.json({status: true, post: posts[index]})
});

app.delete('/posts', (request, response) =>{
  const index = posts.findIndex((p) => +p.id === +request.query.id);
  posts.splice(index, 1);
  return response.json({status: true, text: 'OK'})
})

app.use('*', (request, response) =>{
  response.status(404).send('Endpoint not found on server!')
});

app.listen(process.env.PORT, () =>{
  console.log(`Express server run https://${process.env.HOST}:${process.env.PORT}`)
});

process.env.NODE_ENV