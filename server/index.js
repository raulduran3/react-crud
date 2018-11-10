const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://raul:duran17@ds155811.mlab.com:55811/crudapp');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
