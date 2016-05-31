var page = require('page');
var empty = require('empty-element'); //libreria que permite vaciar variables
var template = require('./template'); //Va a buscar el archivo template.js
var title = require('title');

page('/signin', function(ctx, next){
	title('Platzigram - Signin');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})