let express = require('express')
let app = express();
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/amazonApi',
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {console.log(err ? err : 'localhost ile baglanti kuruldu..!');}
);