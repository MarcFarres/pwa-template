global.config = {
  folders:{
	dist:'../../../xampp/htdocs/pwa-template/dist',
	assets:'assets'
  },
  port: 8080,
  license: 'Apache',
  licenseOptions: {
    organization: 'Eurega.es - All rights reserved.'
  },
  plugins:{
  	js : [
  	'bower_components/html5shiv/dist/html5shiv.min.js',
  	'bower_components/respond/dest/respond.min.js'
  	],
  	jsConcat : [
  	'bower_components/jquery/dist/jquery.min.js',
  	'bower_components/bootstrap/dist/bootstrap.min.js'
  	],
  	css : [
  	'bower_components/bootstrap/dist/css/bootstrap.min.css',
  	'bower_components/font-awesome/web-fonts-with-css/css/fontawesome.min.css'
  	],
  	fonts : [
  	'bower_components/bootstrap/dist/fonts/*',
  	'bower_components/font-awessome/fonts/*'
  	],
  	img : []
  } // plugins
}