const express = require('express')
const app = express()
const add = require('./lib/util');

app.get('/', function (req, res) {
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  console.log("got request for "+a+' + '+ b )
  res.send(a+' + '+ b +' = ' + add(a,b))
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('port 8080!')
})