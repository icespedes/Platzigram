var express = require('express');

var app = express();

app.set('view engine', 'pug'); /*Utiliza pug para renderizar las vistas*/

app.use(express.static('public')); /*Le indicamos a nuestro servidor web que se sirva de manera estatica el repositorio public (en public estaran todos los archivos de la app)*/

/*App tiene una propiedad get a la que llama con parametros. / significa ruta.*/
app.get('/', function (req, res) {
	res.render('index');
});

app.get('/signup', function (req, res) {
  res.render('index'); //por defecto pug, busca la carpeta views y consume el archivo index.
});

app.get('/signin', function (req, res) {
  res.render('index');
});

app.get('/api/pictures', function(req, res){
  var pictures = [
  	{
  		user: {
  			username: 'icespedes',
  			avatar: 'https://pbs.twimg.com/profile_images/697099593281048576/Q9QUIrO_.jpg'
  		},
  		url: 'http://materializecss.com/images/office.jpg',
  		likes: 0,
  		liked: false,
      	createdAt: new Date().setDate(new Date().getDate()-0)
  	},
  	{
  		user: {
  			username: 'icespedes',
  			avatar: 'https://pbs.twimg.com/profile_images/697099593281048576/Q9QUIrO_.jpg'
  		},
  		url: 'http://materializecss.com/images/office.jpg',
  		likes: 1,
  		liked: false,
      	createdAt: new Date().setDate(new Date().getDate() - 10)
  	}
  ];
  //funcion que esta en el scope global, recibe una funcion y el tiempo en que se ejecutara en milisegundos.
  setTimeout(function() {
  	res.send(pictures);
  }, 2000);
});

app.listen(3000, function (err) {
	if(err) 
		return console.log('hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000')
});