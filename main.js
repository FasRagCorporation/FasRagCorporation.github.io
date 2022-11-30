
if ('serviceWorker' in navigator) {
    console.log('Si jala el SW');
    navigator.serviceWorker.register('https://hardworld089.github.io/sw.js')
        .then( resp => console.log('serviceWorkwr ya cargo', resp))
        .catch(err => console.log('no hay SW',err));
}else{
    console.log('No soprta pwa');
}

