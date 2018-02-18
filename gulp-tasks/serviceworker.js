var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('serviceworker',function(){

  gulp.src('src/serviceworker/*.js')
    .pipe(concat('sw.js'))
    .pipe(gulp.dest(global.paths.dist));

});