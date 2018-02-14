var gulp = require('gulp');
var del = require('del');

gulp.task('clean',function(){

  return del([
    paths.html
  ],{force: true});

});