import express from 'express';
import dotenv 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const root = path.join.bind(this,__dirname, '../../');
dotenv.config({ path: root('.env')});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Данные
const users = [
  {name: 'Alex', login: 'alex', password: '123'},
  {name: 'Vera', login: 'vera', password: '321'},
],
// Посты

const posts = [
    {
      id: 1,

      header: "Кобаяси Исса — Я наказал ребенка",

      content:

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер." +

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер." +

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер." +

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер." +

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер." +

        "Я наказал ребенка,\n" +

        "Но привязал его к дереву там,\n" +

        "Где дует прохладный ветер.",

    },

    {
      id: 2,

      header: "Мацуо Басё — Луна проплыла",

      content:

        "Луна проплыла,\n" + "Ветви оцепенели\n" + "В блестках дождевых.",

    },

    {
      id: 3,

      header: "Мацуо Басё — Прощайте, вишни",

      content:

        "Прощайте, вишни!\n" + "Цветенье ваше мой путь\n" + "Теплом согреет.",

    },

    {
      id: 4,

      header: "Мацуо Басё — Совсем исхудал",

      content: "Совсем исхудал,\n" + "И волосы отросли.\n" + "Долгие дожди.",

    },

  
];

// Endpoints

app.post('/auth', (request, response) => {
  const {login, password} = request.body;

  const user = users.find((users) => users.login === login && users.password === password );

if(!user) {
  response.status(401).json({ status: false, message: 'Incorrect user login or password!' })
}

  response.json({status: true, user})
});

app.get('/posts', (request, response ) => {
  response.JSON(posts)
});

app.post('/posts', (request, response ) => {
  posts.push(request.body)

  response.JSON({status: true, post: request.body})
});

app.put('/posts', (request, response ) => {
  const index = posts.findIndex((p) => +p.id === +request.query.id);
  if(index === -1) {
    response.status(401).json({ status: false, message: 'Post not found on server!' })
  }
  posts[index].header = request.body.header;
  posts[index].content = request.body.content;
  response.JSON({status: true, post: posts[index]})
});

app.use('*', (request, response) =>{
  response.status(404).send('Endpoint not found on server!')
});

app.listen(process.env.PORT, () =>{
  console.log(`Express server run https://${process.env.HOST}:${process.env.PORT}`)
});

process.env.NODE_ENV