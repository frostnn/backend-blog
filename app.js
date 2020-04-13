const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.listen(8888, () =>{
  console.log('Express start port 8888')
})