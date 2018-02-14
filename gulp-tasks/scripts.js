var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js',function(){

  gulp.src('src/js/app/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(global.paths.js));

});

gulp.task('js_libs',function(){

  gulp.src('src/js/libs/*.js')
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest(global.paths.libs));

});