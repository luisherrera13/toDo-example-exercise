const express = require('express');
var path = require('path');
//const pug = require('pug');
const app = express();


 app.set('views', path.join(__dirname, 'views'));
 //fuentes: https://www.pensemosweb.com/como-crear-servidor-web-5-minutos-nodejs/
 //app.set('views', path.join(__dirname, 'public'));
 app.set('view engine', 'pug');
 //app.set('view engine', 'html');
 app.get('/', function (req, res) {
  res.render('index');
});
app.listen(3000);
console.log("i am all ears on port 3000...");


