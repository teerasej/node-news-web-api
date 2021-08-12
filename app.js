const express = require('express')
const db = require('monk')('localhost/newsDB')

const app = express()

app.use(express.json());
 

let newsCollection = db.get('news')
// newsCollection.drop()
// newsCollection.insert([
//     { content: 'abc' },
//     { content: 'def' },
//     { content: 'ghi' }
// ])


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/news', function(request, response) {

    newsCollection.find({}).then(function(docs){
        response.json(docs)
    })
})

app.post('/news/create', function(request, response) {

    let news = request.body

    // save 
    console.log(news)

    response.status(200).json({ message: 'ok' })

})

app.listen(3000, function(){
    console.log('server is running port 3000...')
})