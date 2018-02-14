// los targets son los ambientes de ejecución. Establcen condiciones de entorno 
// mediante variables a nuestro código
global.targets = {
	dist: {
		enviroment : 'dist',
		data:{
			assets : config.folders.assets,
		},
	},
	dev : {
		enviroment : 'dev',
		data:{
			assets:config.folders.assets,
		}
	}
};