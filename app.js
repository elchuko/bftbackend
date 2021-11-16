
require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI, 
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


require("./models/marker");
require("./models/monster")


app.use('/v1', require('./routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


var server = app.listen(process.env.PORT || 4000, function(){
  console.log('Listening on port ' + server.address().port);
});