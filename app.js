const cors = require('cors')
const express = require('express')
const db = require('monk')('localhost/newsDB')

const app = express()

app.use(express.json())
app.use(cors())

let newsCollection = db.get('news')


app.get('/', function (req, res) {
  res.send('OK')
})

app.get('/news', function(request, response) {

    newsCollection.find({}, {sort: {_id: -1}}).then(function(docs){
        response.json(docs)
    })
})

app.post('/news/create', function(request, response) {

    let news = request.body

    if(!news.content) {
        response.status(400).send('missing [content] in json')
        return;
    }

    if(!news.sender) {
        response.status(400).send('missing [sender] in json')
        return;
    }

    console.log(news)
    // save 
    newsCollection.insert(news)

    response.status(200).json({ message: 'ok' })

})

app.listen(3000, function(){
    console.log('server is running port 3000...')
})