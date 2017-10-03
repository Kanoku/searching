var Bar = L.layerGroup();
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});


// Crea capa openstreetmap
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
});



// Crea capa stamen lite
var lite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, ' +
    '<a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a> &mdash; ' +
    'Map data &copy <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
});


// Crea capa imagen de esri
var esri_img = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});



//Aquí vamos a crear el mapa. 
var mymap = L.map('map', {
	center: [37.1572788, -3.6020432],
        minZoom: 15,
        maxZoom: 18,
	zoom: 15,
        layers: [esri_img , Bar]
});

var baseLayers = {
    "Satélite": esri_img,
    "Escala de grises": grayscale,
    "Calles": streets,
    "OpenStreetMap": osm,
    "Stamen toner-lite": lite,
};

var overlays = {
	"Bar": Bar
};

mymap.dragging.disable(baseLayers);

L.control.layers(baseLayers, overlays).addTo(mymap);


var popup = L.popup();




L.marker([37.157732, -3.599930] ).bindPopup('Olimpia <p> Tapa: 1,90€').addTo(Bar)

L.marker([37.1572788, -3.6020432]).addTo(Bar).bindPopup("<b> Bar Porras </b><b>Fritura de pescado.</b> <b> Precio:2,00€ </b><br /> ").openPopup();

L.marker([37.160383, -3.596956]).addTo(Bar).bindPopup("<b> Trending Tapas</b><br />").openPopup();

L.marker([37.155790, -3.593677]).addTo(Bar).bindPopup("<b> Cervecería ECU</b><br />Precio Tapa: 2,00€ <b> Especialmente recomendado. ").openPopup();


L.marker([37.160383, -3.596956]).addTo(Bar).bindPopup("<b> Trending Tapas</b><br /> Precio: 2,00€ <b> Pinchitos, Albondigas").openPopup();

L.marker([37.161539, -3.601490]).addTo(Bar).bindPopup("<b> Cafetería Bar El Rondel <b> Precios económicos</b><br /> ").openPopup();

L.marker([37.156673, -3.603373]).addTo(Bar).bindPopup("<b> Mesón La Loma</b><br />37.156673 -3.603373").openPopup();

L.marker([37.153712, -3.591892]).addTo(Bar).bindPopup("<b> La Cueva 1900</b><br /> Precio: 2,20€").openPopup();

L.marker([37.153471, -3.597990]).addTo(Bar).bindPopup("<b> Restaurante, Cafetería Almudena</b><br /> Precio: 2,00€").openPopup();

L.marker([37.153348, -3.597654]).addTo(Bar).bindPopup("<b> Cervecería Alhambra</b> <b> Gambas al Pil Pil </b> <br>Precio: 2,10€</b>").openPopup();

L.marker([37.159757, -3.595001]).addTo(Bar).bindPopup("<b> Gran KiKi Tapas</b><br />Precio Tapa: 2,10€ </b> Papas al ajillo <b> Especialmente recomendado. ").openPopup();

L.marker([37.161364, -3,601591], {icon: L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true}) }).addTo(bares);

//var redIcon = new L.Icon({
//	iconUrl: './img/marker-rojo.png',
//	iconSize: [25, 41],
//	iconAnchor: [12, 41],
//	popupAnchor: [1, -34],
//	shadowSize: [41, 41]
//});
