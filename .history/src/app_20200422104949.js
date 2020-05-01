const express = require('express');

const app = express();
const port = 8888;
app.get('/', (request, response) => {
  response.send('Hello world!')
})
app.listen(port, () =>{
  console.log(`Express start port ${port}`)
})