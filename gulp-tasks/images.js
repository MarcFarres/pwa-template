var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest(global.paths.img));

    gulp.src('src/img/icons/*.{png,jpg,jpeg,gif,svg}')
      .pipe(gulp.dest(global.paths.icons));
});