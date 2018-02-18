var gulp = require('gulp');
var runSequence = require('run-sequence');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-config');

// Get tasks from gulp-tasks directory
require('require-dir')('gulp-tasks');


gulp.task('default',() => {
	runSequence(
		'clean',
		['serviceworker','manifest'],
		['js_libs','js','compileStyles'], 
		'plugins',
		'images', 
		'html',
		['connect','watch']
		);
});

gulp.task('onSaveFrontend',() => {
	runSequence(
		'compileStyles',
		'js',
		'html',
		);
});

gulp.task('watch', () => {
	gulp.watch(paths.watch.frontend, ['onSaveFrontend']);
});