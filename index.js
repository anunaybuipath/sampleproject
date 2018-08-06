var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('OK');
});

app.listen(3000, function() {
  console.log('Have started listening on 3000 port');
})