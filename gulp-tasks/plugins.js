var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');

gulp.task('plugins',() => {

  gulp.src(global.config.plugins.jsConcat)
    .pipe( concat('plugins.min.js',{})) 
    .pipe( gulp.dest(global.paths.js));

  gulp.src(global.config.plugins.js)
    .pipe(gulp.dest(global.paths.js)); 

  gulp.src(global.config.plugins.css)
    .pipe(concat('plugins.min.css',{}))
    .pipe(gulp.dest(global.paths.css));


});