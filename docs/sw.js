self.addEventListener('activate',function(){
  console.log("serviceworker activado");
});
const CACHE = "cache_v1"

const INMUTABLE = [
  
];

const MUTABLE = [

];
self.addEventListener('fetch',function(){

})
self.addEventListener('install',function(event){
  event.waitUntil(
      caches.open(CACHE)
        .then(function(cache){
          console.log('installing:'+CACHE);
          var newInmmutableRequests = [];
          return Promise.all(
          	INMUTABLE.map(function(inmutable_url){
               return caches.match(inmutable_url)
                 .then(function(response){
                 	// caches.match siempre resuelve, cuando no encuentra el elemento devuelve false
                 	if(response){
                 		// añadimos al cache abierto el nombre de la url y el contenido
                 		// lo pasamos de cache a caché
                 		return cache.put(inmutable_url,response);
                 	} // if
                 	else{
                 		// no se ha encontrado al inmutable en el caché actual
                 		newInmmutableRequests.push(url);
                 		return Promise.resolve();
                 	} // else
                 }) // caches.match.then
          	})) // promise.all
          .then(function(){
          	// en las ejecuciones anteriores ya hemos añadido los inmutables de la vieja caché a la nueva
          	// finalmente añadimos los nuevos inmutables (no estaban en la caché antigua) y los mutables
          	// que son los que cambian con cada nueva versión
            return cache.addAll(newInmmutableRequests.concat(MUTABLE));
          }); // promise.all.then
        }) // caches.open.then
  	); // event.waitUntil
  // el event.WaitUntil siempre se resuelve
});