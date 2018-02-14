var gulp = require('gulp');
var processHtml = require('gulp-processhtml');
var path = require('path');

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