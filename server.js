var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname))

app.get('/native/historyRouter/*', function (request, response){
    console.log('his')
  response.sendFile(path.resolve(__dirname, 'native/historyRouter', 'index.html'))
})
app.get('/react/*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'react', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)