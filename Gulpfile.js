var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify'); /*paquete que transforma o compila javascript hecho en ECMAScript 6*/
var browserify = require('browserify');
var source = require('vinyl-source-stream'); /*paquete que permite comunicar un archivo browserify con gulp.*/
var watchify = require('watchify');


/*Esta tarea toma el archivo sass index, lo interpreta, lo convierte en app.css y lo deja en public*/
gulp.task('styles', function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
});

/*Esta tarea toma todo lo que esta en assets y lo copia en la carpeta public*/
gulp.task('assets', function() {
	gulp
		.src('assets/*')
    .pipe(gulp.dest('public')); 
});

function compile(watch) {
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle() {
    bundle
      .transform(babel)
      .bundle()/*Hasta aquí lo procesa browserify*/
      .on('error', function(err){ console.log(err); this.emit('end') }) //cuando suceda el evento error, gatilla el Callback (function)
      .pipe(source('index.js')) /*desde aqui lo empieza a procesar gulp*/
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  if (watch) {
    bundle.on('update', function() {  //cuando gatilla el evento update
      console.log('--> Bundling...');
      rebundle();
    })
  }

  rebundle();

}

gulp.task('build', function(){ 
  return compile();
});

gulp.task('watch', function(){
  return compile(true);
});

/*esta tarea ejecuta todas las tareas dentro del array []*/
gulp.task('default', ['styles', 'assets', 'build']);