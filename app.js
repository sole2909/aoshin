var express = require('express')
var hbs = require('hbs')

var app = express()

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('Home')
})


var PORT = process.env.PORT || 34400
app.listen(PORT)
console.log('server is running on: ',PORT)
