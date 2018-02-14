var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest(global.paths.img));
});