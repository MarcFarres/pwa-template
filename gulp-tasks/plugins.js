var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');

gulp.task('plugins',() => {

  gulp.src(global.config.plugins.jsConcat)
    .pipe( gulpif(global.config.distMode,concat('plugins.min.js',{})) )
    .pipe( gulp.dest(global.paths.js));

  gulp.src(global.config.plugins.js)
    .pipe(gulp.dest(global.paths.js)); 

  gulp.src(global.config.plugins.css)
    .pipe(concat('plugins.min.css',{}))
    .pipe(gulp.dest(global.paths.css));


});