var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var please = require('gulp-pleeease');
var connect = require('gulp-connect');

gulp.task('compileStyles',() => {
  console.log('Executing watch frontend tasks...');
  return gulp.src('src/scss/pages/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(please({
		"autoprefixer":true,
		"filters":true,
		"rem":true,
		"opactity":true
	}))
	.pipe(gulp.dest(global.paths.css))
	.pipe(connect.reload());
});