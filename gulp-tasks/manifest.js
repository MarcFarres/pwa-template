var gulp = require('gulp');


gulp.task('manifest',function(){

  gulp.src('src/manifest.json')
    .pipe(gulp.dest(global.paths.dist));

});