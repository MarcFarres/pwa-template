var gulp = require('gulp');
var runSequence = require('run-sequence');


// Get tasks from gulp-tasks directory
require('require-dir')('gulp-config');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-tasks');


gulp.task('default',() => {
	runSequence(
		'clean',
		'js_libs',
		['html','js','compileStyles'], 
		'images', 
		'watch',
		);
});

gulp.task('onSaveFrontend',() => {
	runSequence(
		'compileStyles',
		'html','js',
		);
});

gulp.task('watch', () => {
	gulp.watch(paths.watch.frontend, ['onSaveFrontend']);
});