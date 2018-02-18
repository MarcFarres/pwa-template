var path = require('path');

global.paths = {
	dist : path.join(config.folders.dist),
	assets : path.join(config.folders.dist,config.folders.assets),
	html : path.join(config.folders.dist),
    js : path.join(config.folders.dist,config.folders.assets,'js'),
    libs : path.join(config.folders.dist,config.folders.assets,'js','libs'),
    fonts : path.join(config.folders.dist,config.folders.assets, 'fonts'),
    css : path.join(config.folders.dist,config.folders.assets, 'css'),
    img : path.join(config.folders.dist,config.folders.assets, 'images'),
    icons : path.join(config.folders.dist,config.folders.assets, 'images','icons'),
    watch: {
	  frontend: [
		'src/scss/**/*.scss',
		'src/js/app/*.js',
		'src/html/**/*.html',
	  ],
	},
}