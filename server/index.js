

const path = require('path');
const express = require('express');

const usersCtrl = require('./controllers/users');

const app = express();
const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./docs'))

    .use('/users', usersCtrl)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})