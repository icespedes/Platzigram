var page = require('page');
var empty = require('empty-element'); //libreria que permite vaciar variables
var template = require('./template'); //Va a buscar el archivo template.js
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, loadPictures, function(ctx, next){
	title('Platzigram');
  var main = document.getElementById('main-container');


  empty(main).appendChild(template(ctx.pictures));
})

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function(err, res){
      if(err) return console.log(err);

      ctx.pictures = res.body;
      next();
    });
}