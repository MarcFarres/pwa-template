var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');
var processHtml = require('gulp-processhtml');

var config = {
	folders:{
		dist:'dist',
		assets:'assets'
	}
}

var paths = {
	dist : path.join(config.folders.dist),
	assets : path.join(config.folders.dist,config.folders.assets),
	html : path.join(config.folders.dist),
    js : path.join(config.folders.dist,config.folders.assets,'js'),
    fonts : path.join(config.folders.dist,config.folders.assets, 'fonts'),
    css : path.join(config.folders.dist,config.folders.assets, 'css'),
    img : path.join(config.folders.dist,config.folders.assets, 'img'),

}

// los targets son los ambientes de ejecución. Establcen condiciones de entorno 
// mediante variables a nuestro código
var targets = {
	dist: {
		enviroment : 'dist',
		data:{
			assets : config.folders.assets,
		},
	},
	dev : {
		enviroment : 'dev',
		data:{
			assets:config.folders.assets,
		}
	}
};

gulp.task('html',function(){

  gulp.src(['src/html/**/*.html','!src/html/layout/**/*'])
    .pipe(processHtml({
    // solo procesamos los archivos que formarán parte del 
    // resultado final
    	recursive : true, // procesa también los includes
    	process : true,  
    	strip : true, // quita comentarios que no se usan en el target actual
    	enviroment : targets.dev.enviroment, // el target usado
    	data : targets.dev.data, // las variables que queremos enviar para el procesado
    }))
    .pipe(gulp.dest(path.join(paths.html)));
});



gulp.task('js',function(){

  gulp.src('src/js/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));

});


gulp.task('clean',function(){

  return del([
    paths.html
  ]);

});



gulp.task('default',function(){
	runSequence(
		'clean',
		['html','js'] 
		);
});