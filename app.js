const express = require('express')
const app = express()

app.use(express.json());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/news', function(request, response) {
    response.json([
        { id: 0, content: 'abc' },
        { id: 1, content: 'def' },
        { id: 2, content: 'ghi' }
    ])
})

app.post('/news/create', function(request, response) {

})

app.listen(3000, function(){
    console.log('server is running port 3000...')
})