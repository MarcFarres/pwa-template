// comprobamos si el serviceworker es soportado por el navegador
if("serviceWorker" in navigator){
  // el registro del script devuelve una "promise"
  navigator.serviceWorker.register(
    "sw.js",
    // tiene acceso a todos los request generados en el site
    {scope : "/"}  
    )
    .then(function(registration){
      // promise ha tenido exito
      console.log("Service Worker Registrado con poder sobre:",registration.scope);
    }).catch(function(err){
      // promise ha fallado en algo
      console.log("Service Worker no se ha podido instalar:",err);
    });
} // if serviceworker
if(!("serviceWorker" in navigator)){
	console.log("El navegador que utilizas no soporta ServiceWorkers !");
}

