//Asignar un nombre y version al cache.
const CACHE_NAME = 'v1-cache_102';
//archivos guardado
var urlsToCache =[
    'https://idgs-92.000webhostapp.com//manifest.json',//Todo lo de director actual.
    'https://idgs-92.000webhostapp.com//css/estilos.css',
    'https://idgs-92.000webhostapp.com//jquery.js',
    'https://idgs-92.000webhostapp.com//main.js',
    'https://idgs-92.000webhostapp.com//sw.js',
    'https://idgs-92.000webhostapp.com//img/Carrucel1.jpeg',
    'https://idgs-92.000webhostapp.com//img/Carrucel2.jpeg',
    'https://idgs-92.000webhostapp.com//img/Carrucel3.jpeg',
    'https://idgs-92.000webhostapp.com//img/Carrucel4.jpeg',
    'https://idgs-92.000webhostapp.com//img/fallen.jpeg',
    'https://idgs-92.000webhostapp.com//img/fondos.png',
    'https://idgs-92.000webhostapp.com//img/fondos2.png',
    'https://idgs-92.000webhostapp.com//img/header.jpg',
    'https://idgs-92.000webhostapp.com//img/icono.ico',
    'https://idgs-92.000webhostapp.com//img/mapa.png',
    'https://idgs-92.000webhostapp.com//videos/Eje.mp4',
    'https://idgs-92.000webhostapp.com//videos/header.mp4',
    'https://idgs-92.000webhostapp.com//videos/2022-10-04 14-12-36_Trim.mp4'
];

//Evento Install

//Instalaciíon SW y almacenar en cache los recursos estáticos.
self.addEventListener('install', e=>{
    e.waitUntil(//esperar a que abra el cache, regresa una promesa.
    cache.open(CACHE_NAME)//Abrimos el cache, regresamos una promesa.
        .then(cache=>{
            cache.addAll(urlToCache)//Regresamos los elementos del arreglo.
            .then(()=>{
                self.skipWaiting();//Espera a que se lleno el cache.
            })
            .cache(err=>{
                console.log('No se a registrado la acheS')
            })
        })
    )
})

//Evento Activate

self.addEventListener('activate', e=>{
    const cacheWhitelist = [CACHE_NAME]//Vamos a guardar todos los elementos que vienen del cache original.
    e.waitUntil(
        caches.keys()//El keys recorre los elementos que hay en el cache.
            .then(cacheNames =>{
                return Promise.all(
                    //map() nos permite recorrer el array
                    cacheNames.map(cacheNames=>{
                        //indesOf es para buscar un elemto del cache.
                        //los siguiente es buscar un elemento y si no se encuentra borrarlo de la cache o si es redudante.
                        if(cacheWhitelist.indexOf(cacheNames)=== -1){
                            //Borrar elementos que no se necesiten.
                            return cache.delete(cacheNames);
                        }
                    })
                )
                //Activar cahe
                .then(()=>{
                    self.clients.claim();//Activa la cache actual del WhiteList.
                })
            })
    );
})

//Evento Fetch

//Verificar que la informacion esta en el cache.
self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)//Busca la informacion en el cache.
        .then(res=>{
            if(res){
                //Si se encuentra en el cache devuelve del cache.
                return res;
            }
            //En caso de que no se encuentre en el cache lo recupero del servidor.
            return fetch(e.request);
        })
    );
})