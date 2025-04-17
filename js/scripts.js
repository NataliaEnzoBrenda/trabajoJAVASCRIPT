

/* Coordenadas de la empresa
const empresaLat = 40.4168;
const empresaLng = -3.7038;

// Inicializamos mapa
const map = L.map('map').setView([empresaLat, empresaLng], 13);

// Cargamos mapa desde OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//PARA AÑADIR UNA MARCA EN EL MAPA PODEMOS LLEVARLO A CABO DE DOS MANERAS:

//---------------------------AÑADIMOS UN TOOLTIP----------------------------------//
//let marker= L.marker([40.414121, -3.704254]).bindTooltip('Estoy aqui').openTooltip().addTo(map);


//---------------------------AÑADIMOS UN POP UP-----------------------------------//
// Marcamos la ubicación de la empresa utilizando un popup

//Primero creamos el popup

let popup=L.popup().setLatLng([empresaLat, empresaLng]).setContent('Agencia de Viajes: Viajando Por El Mundo<br>Calle Falsa 123, Madrid');

//Despues creamos la marca
let marker= L.marker([empresaLat, empresaLng]).bindPopup(popup).openPopup().addTo(map);

//------------------------------AÑADIMOS RUTA-------------------------------------------------//

//Configuramos las opciones

let options={
    enableHighAccuracy: true,
    timeout:5000,
    maximumAge: 0

}

//Definimos las coordenadas de destino


//Comprobamos que nuestro dispositivo tenga disponible la geolocalización
if(navigator.geolocation){
    //Si nuestro dispositivo dispone de esta geolocalizacion le vamos a pedir lo siguiente
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );

}else{
    alert("Los servicios de geolocalización no estan disponibles")
}



//CREAMOS ESTA FUNCION YA QUE DISPONEMOS DE LA POSICION

function success(position){
    //Coordenadas de la posicion del cliente

    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;

    //Dibujamos el mapa

    let map=L.map('map',{
        center:[latitude, longitude],
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    //Calculamos la ruta

    let route=L.Routing.control({
        waypoints: [
        //Pasamos el inicio de la ruta, posicion de la persona
          L.latLng(latitude, longitude),
        //Pasamos el destino de la ruta, coordenadas de la empresa donde quiere ir el cliente
          L.latLng(empresaLat,empresaLng)
        ],
        language: 'es',
      }).addTo(map);






}

//CREAMOS ESTA FUNCION CUANDO NO DISPONEMOS DE LA POSICION
function error(){

}*/

// Coordenadas de la empresa
const empresaLat = 40.4168;
const empresaLng = -3.7038;

// Inicializamos mapa
let map = L.map('map').setView([empresaLat, empresaLng], 13);

// Cargamos mapa desde OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marcamos la ubicación de la empresa utilizando un popup
let popup = L.popup().setLatLng([empresaLat, empresaLng]).setContent('Agencia de Viajes: Viajando Por El Mundo<br>Calle Falsa 123, Madrid');
let marker = L.marker([empresaLat, empresaLng]).bindPopup(popup).openPopup().addTo(map);

// Configuración para la geolocalización
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// Variable para la ruta
let route;

// Función para manejar la geolocalización exitosa
function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Calculamos la ruta
    route = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(empresaLat, empresaLng)
        ],
        language: 'es',
    }).addTo(map);

    //Centramos el mapa en la ubicación del usuario.
    map.setView([latitude, longitude], 14);

}

//Función para manejar los errores de geolocalización.
function error(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
    alert("No se pudo obtener su ubicación. Por favor, asegúrese de que la geolocalización esté activada.");
}

// Comprobamos la geolocalización
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
} else {
    alert("Los servicios de geolocalización no están disponibles.");
}

