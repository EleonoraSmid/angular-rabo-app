const express = require('express'),
      app = express()

app.use('/', express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/src'))
app.use('/angular', express.static(__dirname + '/node_modules/angular'))
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'))
app.use('/js/slider', express.static(__dirname + '/node_modules/angularjs-slider/dist'))
app.listen(3000, function(res,req){

})
