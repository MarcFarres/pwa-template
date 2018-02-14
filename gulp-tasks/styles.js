var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('compileStyles',() => {
  console.log('Executing watch frontend tasks...');
  return gulp.src('src/scss/pages/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(global.paths.css))
});