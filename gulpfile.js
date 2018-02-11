gulp = require('gulp');

gulp.task('html',function(){
  gulp.src('src/html/index.html')
    .pipe(gulp.dest('dist/'));
});


gulp.task('default',function(){

});