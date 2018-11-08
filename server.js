'use strict';

var express = require('express');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.post('/api/upload', upload.single('upfile'), (req, res) => {
  var fileData = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };
  res.json(fileData);
});


app.listen(port, () => {
  console.log('Node.js listening ...');
});
