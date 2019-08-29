const express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'));

var AYLIENTextAPI = require("aylien_textapi");

// set aylien API credentias
var textapi = new AYLIENTextAPI({
    application_id: "9503ed71",
    application_key: "09be0c017641bd1fe3ee698bbdcefeab"
});

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

app.get('/test', function (req, res) {
    res.send(json);
})

app.post('/article', function(req, res) {
    console.log(req);
    console.log("making request to aylien for article analysis: ", req.body);
    textapi.sentiment({
        'url': req.body.url
    }, function(error, response) {
        console.log("recieved alien result! ", response)
        res.send(response)
    });
})
module.exports = app

