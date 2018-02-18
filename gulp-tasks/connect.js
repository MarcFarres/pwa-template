var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect',() => {

  connect.server({
  	root:config.folders.dist,
  	port:8080,
  	livereload:true
  });

});