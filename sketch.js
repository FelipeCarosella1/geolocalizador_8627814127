
let lat; // variable de latitud
let lon; // variable de longitud
let canvas;
function setup() {
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log('geolocation funcionando');
        // getCurrentPosition() se usa para obtener la posicion de un dispositivo 
        navigator.geolocation.getCurrentPosition(async position => {
            // console.log(position);
            lat = position.coords.latitude; // obtenemos latitud
            lon = position.coords.longitude; // obtenermos longitud
            console.log(lat.toFixed(2)); // visualizamos latitud en modo progrmador
            console.log(lon); // visualizamos longitud en modo programador 
                    });
    } else {
        /* geolocation IS NOT available */
        console.log('geolocation NO funcionando');
    };

canvas = createCanvas(200,200); // crea el linezo de 200x200
initMap()
  }
  
function draw () {
textSize(16); // fija el tamaño del texto
text("latitud",20,30); // imprime el texto en posicion x, y 
text(lat,85,30); // imprime variable en posicion x,y
text("longitud",20,50); // imprime el texto en posicion x,y
text(lon,85,50); // imprime variable en posicion x,y
  }

function initMap() {
    let myMap;
    const mappa = new Mappa('Leaflet');;
    const options = {
    lat: lat,
    lng: lon,
    zoom: 4,
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
}