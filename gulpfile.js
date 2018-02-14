var gulp = require('gulp');
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-config');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-tasks');


gulp.task('default',() => {
	runSequence(
		'clean',
		'js_libs',
		['html','js','compileStyles'], 
		'plugins',
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