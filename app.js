const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/news', function(request, response) {
    
})

app.post('/news/create', function(request, response) {
    
})

app.listen(3000, function(){
    console.log('server is running...')
})