const express = require('express')
const app = express()
const add = require('./lib/util');

//Define request response in root URL (/)
app.get('/', function (req, res) {
  const a = Number(req.query.a)
  const b = Number(req.query.b)
  res.send(a+' + '+ b +' = ' + add(a,b))
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})